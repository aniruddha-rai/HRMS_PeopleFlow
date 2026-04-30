package com.peopleflow.auth.domain.repository;

import com.peopleflow.auth.domain.entity.UserEntity;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    Optional<UserEntity> findByEmailIgnoreCase(String email);

    boolean existsByEmailIgnoreCase(String email);

    @EntityGraph(attributePaths = {"userRoles", "userRoles.role"})
    Optional<UserEntity> findWithRolesByEmailIgnoreCase(String email);

    @EntityGraph(attributePaths = {"userRoles", "userRoles.role"})
    List<UserEntity> findTop20ByOrderByIdAsc();
}