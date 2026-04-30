package com.peopleflow.auth.application;

import com.peopleflow.auth.api.UserSanityResponse;
import com.peopleflow.auth.domain.entity.UserEntity;
import com.peopleflow.auth.domain.repository.RoleRepository;
import com.peopleflow.auth.domain.repository.UserRepository;
import com.peopleflow.auth.mapper.UserMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class DbSanityService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final UserMapper userMapper;

    public DbSanityService(
            UserRepository userRepository,
            RoleRepository roleRepository,
            UserMapper userMapper
    ) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.userMapper = userMapper;
    }

    @Transactional(readOnly = true)
    public Map<String, Object> databaseSummary() {
        return Map.of(
                "users", userRepository.count(),
                "roles", roleRepository.count(),
                "status", "DB connection and JPA repositories are working"
        );
    }

    @Transactional(readOnly = true)
    public List<UserSanityResponse> fetchSampleUsers() {
        return userRepository.findTop20ByOrderByIdAsc()
                .stream()
                .map(userMapper::toSanityResponse)
                .toList();
    }

    @Transactional(readOnly = true)
    public UserSanityResponse fetchUserByEmail(String email) {
        UserEntity user = userRepository.findWithRolesByEmailIgnoreCase(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found for email: " + email));

        return userMapper.toSanityResponse(user);
    }
}