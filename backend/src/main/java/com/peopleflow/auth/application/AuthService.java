package com.peopleflow.auth.application;

import com.peopleflow.auth.api.AuthResponse;
import com.peopleflow.auth.api.LoginRequest;
import com.peopleflow.auth.domain.entity.UserEntity;
import com.peopleflow.auth.domain.entity.UserRoleEntity;
import com.peopleflow.auth.domain.repository.UserRepository;
import com.peopleflow.shared.security.JwtService;

import jakarta.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AuthService {

    private static final Logger log = LoggerFactory.getLogger(AuthService.class);
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final JwtService jwtService;

    public AuthService(AuthenticationManager authenticationManager,
                   UserRepository userRepository,
                   JwtService jwtService,
                   PasswordEncoder passwordEncoder) {
    this.authenticationManager = authenticationManager;
    this.userRepository = userRepository;
    this.jwtService = jwtService;
    this.passwordEncoder = passwordEncoder;
}

	
    @Transactional(readOnly = true)
    public AuthResponse login(LoginRequest request) {

        log.info(">>> Login attempt for email: {}", request.email());

        Authentication authentication;
        try {
            authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.email(),
                            request.password()));

            log.info(">>> Authentication SUCCESS for: {}", request.email());

        } catch (Exception e) {
            log.error(">>> Authentication FAILED: {} - {}",
                    e.getClass().getSimpleName(), e.getMessage());
            throw e;
        }

        UserDetails principal = (UserDetails) authentication.getPrincipal();

        UserEntity user = userRepository
                .findWithRolesByEmailIgnoreCase(principal.getUsername())
                .orElseThrow(() -> new IllegalStateException(
                        "Authenticated user not found in database"));

        String accessToken  = jwtService.generateAccessToken(principal);
        String refreshToken = jwtService.generateRefreshToken(principal);
        long   expiresIn    = jwtService.getExpiresInSeconds(accessToken);

        String primaryRole   = resolvePrimaryRole(user);
        List<String> modules = resolveVisibleModules(user);

        return new AuthResponse(
                accessToken,
                refreshToken,
                expiresIn,
                user.getUsername(),
                primaryRole,
                "EMP-" + user.getId(),
                modules
        );
    }

    private String resolvePrimaryRole(UserEntity user) {
        return user.getUserRoles().stream()
                .map(ur -> ur.getRole().getCode())
                .sorted()
                .findFirst()
                .orElse("EMPLOYEE");
    }

    private List<String> resolveVisibleModules(UserEntity user) {
        boolean isHr = user.getUserRoles().stream()
                .map(UserRoleEntity::getRole)
                .anyMatch(r -> "HR".equalsIgnoreCase(r.getCode())
                               || "ADMIN".equalsIgnoreCase(r.getCode()));

        if (isHr) {
            return List.of("home", "tasks", "profile", "attendance", "leave",
                           "payroll", "documents", "tax-documents", "people",
                           "expense-claims", "helpdesk");
        }

        return List.of("home", "tasks", "profile", "attendance", "leave",
                       "documents", "expense-claims", "helpdesk");
    }

    // ── ADD THIS METHOD ───────────────────────────────────────────────────────
    @PostConstruct
    public void verifyBcrypt() {
        String correctHash = passwordEncoder.encode("emp123");
        log.info(">>> Correct hash for emp123: {}", correctHash);
    }
}
