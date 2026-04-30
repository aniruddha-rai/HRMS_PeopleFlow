package com.peopleflow.auth.domain.entity;

import com.peopleflow.shared.persistence.AuditableEntity;
import jakarta.persistence.*;

@Entity
@Table(
    name = "user_roles",
    uniqueConstraints = {
        @UniqueConstraint(
        name = "uk_user_roles_user_role",
        columnNames = {"user_id", "role_id"}
        )
    }
)
public class UserRoleEntity extends AuditableEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "role_id", nullable = false)
    private RoleEntity role;

    protected UserRoleEntity() {
    }

    public UserRoleEntity(UserEntity user, RoleEntity role) {
        this.user = user;
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public UserEntity getUser() {
        return user;
    }

    public RoleEntity getRole() {
        return role;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    public void setRole(RoleEntity role) {
        this.role = role;
    }
}