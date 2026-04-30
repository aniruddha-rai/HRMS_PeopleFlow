package com.peopleflow.auth.domain.repository;

import com.peopleflow.auth.domain.entity.UserRoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRoleRepository extends JpaRepository<UserRoleEntity, Long> {

//    List<UserRoleEntity> findByUserId(Long userId);
//    boolean existsByUserIdAndRoleId(Long userId, Long roleId);
}