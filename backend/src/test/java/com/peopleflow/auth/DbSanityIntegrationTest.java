package com.peopleflow.auth;

import com.peopleflow.auth.domain.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.context.DynamicPropertyRegistry;
//import org.springframework.test.context.DynamicPropertySource;
//import org.testcontainers.containers.PostgreSQLContainer;
//import org.testcontainers.junit.jupiter.Container;
//import org.testcontainers.junit.jupiter.Testcontainers;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.greaterThanOrEqualTo;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

//@Testcontainers
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
class DbSanityIntegrationTest {

//    @Container
//    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:16-alpine")
//            .withDatabaseName("peopleflow_hrms")
//            .withUsername("test")
//            .withPassword("test");

//    @DynamicPropertySource
//    static void databaseProperties(DynamicPropertyRegistry registry) {
//        registry.add("spring.datasource.url", postgres::getJdbcUrl);
//        registry.add("spring.datasource.username", postgres::getUsername);
//        registry.add("spring.datasource.password", postgres::getPassword);
//
//        registry.add("spring.jpa.hibernate.ddl-auto", () -> "validate");
//        registry.add("spring.flyway.enabled", () -> "true");
//
//        /*
//         * In tests, the database starts empty.
//         * So Flyway should run V1, V2, V3 normally.
//         * We do not need baseline-on-migrate for a fresh Testcontainers DB.
//         */
//        registry.add("spring.flyway.baseline-on-migrate", () -> "false");
//    }

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MockMvc mockMvc;

    @BeforeEach
    void seedData() {
        Integer count = jdbcTemplate.queryForObject("SELECT COUNT(*) FROM users", Integer.class);

        if (count != null && count == 0) {
            jdbcTemplate.update("""
                INSERT INTO users(username, email)
                VALUES ('john.doe', 'john.doe@company.com')
                """);

            jdbcTemplate.update("""
                INSERT INTO roles(code, name)
                VALUES ('EMPLOYEE', 'Employee')
                """);

            jdbcTemplate.update("""
                INSERT INTO user_roles(user_id, role_id)
                SELECT u.id, r.id
                FROM users u, roles r
                WHERE u.email = 'john.doe@company.com'
                  AND r.code = 'EMPLOYEE'
                """);
        }
    }

    @Test
    void shouldValidateMappingsAndFetchUserRoles() {
        var user = userRepository.findWithRolesByEmailIgnoreCase("john.doe@company.com")
            .orElseThrow();

        assertThat(user.getEmail()).isEqualTo("john.doe@company.com");

        assertThat(user.getUserRoles())
            .extracting(userRole -> userRole.getRole().getCode())
            .contains("EMPLOYEE");
    }

    @Test
    void shouldExposeSanityDbEndpoint() throws Exception {
        mockMvc.perform(get("/api/v1/sanity/db"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.success").value(true))
            .andExpect(jsonPath("$.data.users", greaterThanOrEqualTo(1)))
            .andExpect(jsonPath("$.data.roles", greaterThanOrEqualTo(1)));
    }

    @Test
    void shouldExposeUsersEndpointWithRoles() throws Exception {
        mockMvc.perform(get("/api/v1/sanity/users"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.success").value(true))
            .andExpect(jsonPath("$.data[0].email").exists())
            .andExpect(jsonPath("$.data[0].roles").isArray());
    }
}