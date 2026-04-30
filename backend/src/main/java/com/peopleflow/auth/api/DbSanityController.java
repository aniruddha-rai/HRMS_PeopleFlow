package com.peopleflow.auth.api;

import com.peopleflow.auth.application.DbSanityService;
import com.peopleflow.shared.response.ApiResponse;
import jakarta.validation.constraints.Email;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Validated
@RestController
@RequestMapping("/api/v1/sanity")
public class DbSanityController {

    private final DbSanityService dbSanityService;

    public DbSanityController(DbSanityService dbSanityService) {
        this.dbSanityService = dbSanityService;
    }

    @GetMapping("/db")
    public ApiResponse<Map<String, Object>> databaseSummary() {
        return ApiResponse.success(dbSanityService.databaseSummary());
    }

    @GetMapping("/users")
    public ApiResponse<List<UserSanityResponse>> users() {
        return ApiResponse.success(dbSanityService.fetchSampleUsers());
    }

    @GetMapping("/users/by-email")
    public ApiResponse<UserSanityResponse> userByEmail(@RequestParam @Email String email) {
        return ApiResponse.success(dbSanityService.fetchUserByEmail(email));
    }
}