package com.peopleflow.employeeprofile.api;

import com.peopleflow.shared.response.ApiResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/profile")
public class ProfileController {

    @GetMapping("/me")
    public ApiResponse<ProfileSummaryResponse> me() {
        return ApiResponse.success(new ProfileSummaryResponse(
            "EMP-10042",
            "John Doe",
            "john.doe@company.com",
            "Engineering",
            "Senior Software Engineer",
            List.of("Bangalore", "Active")
        ));
    }
}
