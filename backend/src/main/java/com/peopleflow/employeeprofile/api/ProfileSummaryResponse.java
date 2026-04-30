package com.peopleflow.employeeprofile.api;

import java.util.List;

public record ProfileSummaryResponse(
    String employeeId,
    String name,
    String officialEmail,
    String department,
    String designation,
    List<String> tags
) {}
