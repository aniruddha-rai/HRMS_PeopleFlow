package com.peopleflow.shared.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
/**
 * Stateless JWT utility: token generation and validation.
 * Uses HMAC-SHA256 signed with the secret from {@link JwtProperties}.
 */
@Service
public class JwtService {

    private final JwtProperties props;
     private static final Logger log = LoggerFactory.getLogger(JwtService.class);
    public JwtService(JwtProperties props) {
        this.props = props;
    }

    // ── Token Generation ─────────────────────────────────────────────────────

    /**
     * Generates a short-lived access token embedding the user's email and roles.
     */
    public String generateAccessToken(UserDetails userDetails) {
        Instant now = Instant.now();
        Instant expiry = now.plus(props.getAccessTokenTtlMinutes(), ChronoUnit.MINUTES);

        List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());
                
        log.debug("$$$$$$$$$$$  Generated JWT for [{}] — expires in {} min, roles: {}",
                userDetails.getUsername(),
                props.getAccessTokenTtlMinutes(),
                userDetails.getAuthorities());

        return Jwts.builder()
                .subject(userDetails.getUsername())           // email as subject
                .issuer(props.getIssuer())
                .claim("roles", roles)
                .issuedAt(Date.from(now))
                .expiration(Date.from(expiry))
                .signWith(signingKey())
                .compact();
    }

    /**
     * Generates a long-lived refresh token (subject only; no roles claim).
     */
    public String generateRefreshToken(UserDetails userDetails) {
        Instant now = Instant.now();
        Instant expiry = now.plus(props.getRefreshTokenTtlDays(), ChronoUnit.DAYS);

        return Jwts.builder()
                .subject(userDetails.getUsername())
                .issuer(props.getIssuer())
                .claim("type", "refresh")
                .issuedAt(Date.from(now))
                .expiration(Date.from(expiry))
                .signWith(signingKey())
                .compact();
    }

    // ── Token Inspection ─────────────────────────────────────────────────────

    /**
     * Extracts the subject (email) from a token without full validation.
     * Call {@link #isTokenValid(String, UserDetails)} before trusting the result.
     */
    public String extractSubject(String token) {
        return parseClaims(token).getSubject();
    }

    /**
     * Returns true when the token is well-formed, not expired, and the subject
     * matches the provided {@link UserDetails}.
     */
    public boolean isTokenValid(String token, UserDetails userDetails) {
        try {
            Claims claims = parseClaims(token);
            boolean subjectMatch = claims.getSubject().equalsIgnoreCase(userDetails.getUsername());
            boolean notExpired = claims.getExpiration().after(new Date());
            return subjectMatch && notExpired;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }

    /**
     * Calculates remaining TTL of a token in seconds (0 if expired / invalid).
     */
    public long getExpiresInSeconds(String token) {
        try {
            Date expiry = parseClaims(token).getExpiration();
            long remaining = (expiry.getTime() - System.currentTimeMillis()) / 1000;
            return Math.max(remaining, 0);
        } catch (JwtException | IllegalArgumentException e) {
            return 0;
        }
    }

    // ── Private Helpers ───────────────────────────────────────────────────────

    private Claims parseClaims(String token) {
        return Jwts.parser()
                .verifyWith(signingKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    private SecretKey signingKey() {
        byte[] keyBytes = props.getSecret().getBytes(StandardCharsets.UTF_8);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
