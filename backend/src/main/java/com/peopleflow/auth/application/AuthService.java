package com.peopleflow.auth.application;

import com.peopleflow.auth.api.AuthResponse;
import com.peopleflow.auth.api.LoginRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthService {

    public AuthResponse login(LoginRequest request) {
        return new AuthResponse(
            "demo-access-token",
            "demo-refresh-token",
            1800,
            "John Doe",
            "Software Engineer",
            "EMP-10042",
            List.of("home", "tasks", "profile", "attendance", "leave", "payroll", "documents", "tax-documents", "people", "expense-claims", "helpdesk")
        );
    }
}
