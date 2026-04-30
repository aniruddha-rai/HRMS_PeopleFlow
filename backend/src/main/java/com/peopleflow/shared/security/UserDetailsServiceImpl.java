package com.peopleflow.shared.security;

import com.peopleflow.auth.domain.entity.UserEntity;
import com.peopleflow.auth.domain.repository.UserRepository;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Loads a {@link UserDetails} from the database by email (used as the username).
 * Roles stored in the {@code roles} table are mapped to Spring Security authorities
 * with a {@code ROLE_} prefix so they work with {@code hasRole()} expressions.
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;
	private static final Logger log = LoggerFactory.getLogger(JwtService.class);
    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
@Transactional(readOnly = true)
public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

    log.info(">>> Loading user: {}", email);

    UserEntity userEntity = userRepository
            .findWithRolesByEmailIgnoreCase(email)
            .orElseThrow(() -> {
                log.error(">>> USER NOT FOUND: {}", email);
                return new UsernameNotFoundException("No account found for email: " + email);
            });

    log.info(">>> Hash from DB: [{}]", userEntity.getPasswordHash()); // ADD THIS
    log.info(">>> Hash length: {}", userEntity.getPasswordHash().length()); // ADD THIS

    List<SimpleGrantedAuthority> authorities = userEntity.getUserRoles().stream()
            .map(ur -> new SimpleGrantedAuthority("ROLE_" + ur.getRole().getCode()))
            .collect(Collectors.toList());

    return User.builder()
            .username(userEntity.getEmail())
            .password(userEntity.getPasswordHash())
            .authorities(authorities)
            .accountExpired(false)
            .accountLocked(false)
            .credentialsExpired(false)
            .disabled(false)
            .build();
}
}
