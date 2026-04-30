package com.peopleflow.auth;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.peopleflow.auth.api.LoginRequest;
import com.peopleflow.auth.domain.entity.UserEntity;
import com.peopleflow.auth.domain.entity.RoleEntity;
import com.peopleflow.auth.domain.entity.UserRoleEntity;
import com.peopleflow.auth.domain.repository.RoleRepository;
import com.peopleflow.auth.domain.repository.UserRepository;
import com.peopleflow.auth.domain.repository.UserRoleRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.transaction.annotation.Transactional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
@Transactional
class AuthIntegrationTest {

    @Autowired MockMvc mockMvc;
    @Autowired ObjectMapper objectMapper;
    @Autowired UserRepository userRepository;
    @Autowired RoleRepository roleRepository;
    @Autowired UserRoleRepository userRoleRepository;
    @Autowired PasswordEncoder passwordEncoder;

    private static final String TEST_EMAIL    = "test@peopleflow.com";
    private static final String TEST_PASSWORD = "Test@1234";

    @BeforeEach
    void seedUser() {
        RoleEntity role = roleRepository.save(new RoleEntity("EMPLOYEE", "Employee"));

        UserEntity user = new UserEntity(
            "Test User",
            TEST_EMAIL,
            passwordEncoder.encode(TEST_PASSWORD)   // BCrypt happens here
        );
        userRepository.save(user);
        userRoleRepository.save(new UserRoleEntity(user, role));
    }

    // ── Test 1: Successful login returns JWT ─────────────────────────────────

    @Test
    void login_withValidCredentials_returnsJwtAndUserInfo() throws Exception {
        LoginRequest req = new LoginRequest(TEST_EMAIL, TEST_PASSWORD);

        MvcResult result = mockMvc.perform(post("/api/v1/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(req)))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.success").value(true))
            .andExpect(jsonPath("$.data.accessToken").isNotEmpty())
            .andExpect(jsonPath("$.data.refreshToken").isNotEmpty())
            .andExpect(jsonPath("$.data.expiresIn").value(greaterThan(0)))
            .andExpect(jsonPath("$.data.name").value("Test User"))
            .andReturn();

        // Extract token for use in subsequent tests
        String body = result.getResponse().getContentAsString();
        String token = objectMapper.readTree(body)
                           .path("data").path("accessToken").asText();
        assertThat(token).startsWith("ey");  // all JWTs start with eyJ...
    }

    // ── Test 2: Wrong password returns 401 ───────────────────────────────────

    @Test
    void login_withWrongPassword_returns401() throws Exception {
        LoginRequest req = new LoginRequest(TEST_EMAIL, "WrongPassword");

        mockMvc.perform(post("/api/v1/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(req)))
            .andExpect(status().isUnauthorized())
            .andExpect(jsonPath("$.success").value(false))
            .andExpect(jsonPath("$.message").value("Invalid email or password"));
    }

    // ── Test 3: Unknown email returns 401 (not 404, prevents enumeration) ────

    @Test
    void login_withUnknownEmail_returns401NotLeakingEmailExistence() throws Exception {
        LoginRequest req = new LoginRequest("nobody@x.com", TEST_PASSWORD);

        mockMvc.perform(post("/api/v1/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(req)))
            .andExpect(status().isUnauthorized())
            .andExpect(jsonPath("$.message").value("Invalid email or password")); // same msg
    }

    // ── Test 4: Protected endpoint rejects request with no token ─────────────

    @Test
    void protectedEndpoint_withNoToken_returns401() throws Exception {
        mockMvc.perform(get("/api/v1/profile/me"))
            .andExpect(status().isUnauthorized());
    }

    // ── Test 5: Protected endpoint accepts valid JWT ──────────────────────────

    @Test
    void protectedEndpoint_withValidToken_returns200() throws Exception {
        // First: login to get a token
        LoginRequest req = new LoginRequest(TEST_EMAIL, TEST_PASSWORD);
        MvcResult loginResult = mockMvc.perform(post("/api/v1/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(req)))
            .andReturn();

        String token = objectMapper.readTree(loginResult.getResponse().getContentAsString())
                           .path("data").path("accessToken").asText();

        // Then: call protected endpoint with token
        mockMvc.perform(get("/api/v1/profile/me")
                .header("Authorization", "Bearer " + token))
            .andExpect(status().isOk());
    }

    // ── Test 6: Tampered / invalid JWT is rejected ────────────────────────────

    @Test
    void protectedEndpoint_withTamperedToken_returns401() throws Exception {
        mockMvc.perform(get("/api/v1/profile/me")
                .header("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.fake.signature"))
            .andExpect(status().isUnauthorized());
    }
}