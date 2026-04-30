package com.peopleflow.auth.api;

import java.util.List;

public record AuthResponse(
    String accessToken,
    String refreshToken,
    long expiresIn,
    String name,
    String role,
    String employeeId,
    List<String> visibleModules
) {}
