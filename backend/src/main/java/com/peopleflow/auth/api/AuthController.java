package com.peopleflow.auth.api;

import com.peopleflow.auth.application.AuthService;
import com.peopleflow.shared.response.ApiResponse;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ApiResponse<AuthResponse> login(@Valid @RequestBody LoginRequest request) {
        return ApiResponse.success(authService.login(request), "Login successful");
    }

    @PostMapping("/refresh")
    public ApiResponse<Map<String, Object>> refresh() {
        return ApiResponse.success(Map.of("accessToken", "demo-access-token", "expiresIn", 1800), "Token refreshed");
    }

    @PostMapping("/logout")
    public ApiResponse<Void> logout() {
        return ApiResponse.success(null, "Logged out");
    }

    @GetMapping("/me")
    public ApiResponse<Map<String, Object>> me() {
        return ApiResponse.success(Map.of(
            "name", "John Doe",
            "roles", List.of("EMPLOYEE"),
            "visibleModules", List.of("home", "tasks", "profile", "attendance", "leave")
        ));
    }
}
