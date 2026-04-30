package com.peopleflow.auth.api;

import java.util.List;

public record UserSanityResponse(
        Long id,
        String username,
        String email,
        List<String> roles
) {
}