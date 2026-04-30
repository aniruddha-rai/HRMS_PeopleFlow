package com.peopleflow.auth.mapper;

import com.peopleflow.auth.api.UserSanityResponse;
import com.peopleflow.auth.domain.entity.UserEntity;
import com.peopleflow.auth.domain.entity.UserRoleEntity;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

import java.util.Comparator;
import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface UserMapper {

    default UserSanityResponse toSanityResponse(UserEntity user) {
        List<String> roles = user.getUserRoles()
                .stream()
                .map(UserRoleEntity::getRole)
                .sorted(Comparator.comparing(role -> role.getCode()))
                .map(role -> role.getCode())
                .toList();

        return new UserSanityResponse(
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                roles
        );
    }
}