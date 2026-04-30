package com.peopleflow.auth.domain.entity;

import com.peopleflow.shared.persistence.AuditableEntity;
import jakarta.persistence.*;

import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "users")
public class UserEntity extends AuditableEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username", nullable = false, unique = true, length = 100)
    private String username;

    @Column(name = "email", nullable = false, unique = true, length = 255)
    private String email;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private Set<UserRoleEntity> userRoles = new LinkedHashSet<>();

    protected UserEntity() {
    }

    public UserEntity(String username, String email) {
        this.username = username;
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public Set<UserRoleEntity> getUserRoles() {
        return userRoles;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}