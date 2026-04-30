package com.peopleflow.auth.domain.entity;

import com.peopleflow.shared.persistence.AuditableEntity;
import jakarta.persistence.*;

import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "roles")
public class RoleEntity extends AuditableEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "code", nullable = false, unique = true, length = 50)
    private String code;

    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @OneToMany(mappedBy = "role", fetch = FetchType.LAZY)
    private Set<UserRoleEntity> userRoles = new LinkedHashSet<>();

    protected RoleEntity() {
    }

    public RoleEntity(String code, String name) {
        this.code = code;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public String getCode() {
        return code;
    }

    public String getName() {
        return name;
    }

    public Set<UserRoleEntity> getUserRoles() {
        return userRoles;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void setName(String name) {
        this.name = name;
    }
}