package com.peopleflow.shared.security;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * Binds the {@code security.jwt.*} block from application.yml.
 * All values can be overridden via environment variables.
 */
@Component
@ConfigurationProperties(prefix = "security.jwt")
public class JwtProperties {

    /** Token issuer claim (iss). */
    private String issuer = "peopleflow";

    /**
     * HMAC-SHA256 signing secret.
     * Must be at least 32 characters in production; override via JWT_SECRET env var.
     */
    private String secret = "change-me-in-real-env";

    /** Access token lifetime in minutes. */
    private long accessTokenTtlMinutes = 30;

    /** Refresh token lifetime in days. */
    private long refreshTokenTtlDays = 7;

    public String getIssuer() { return issuer; }
    public void setIssuer(String issuer) { this.issuer = issuer; }

    public String getSecret() { return secret; }
    public void setSecret(String secret) { this.secret = secret; }

    public long getAccessTokenTtlMinutes() { return accessTokenTtlMinutes; }
    public void setAccessTokenTtlMinutes(long accessTokenTtlMinutes) { this.accessTokenTtlMinutes = accessTokenTtlMinutes; }

    public long getRefreshTokenTtlDays() { return refreshTokenTtlDays; }
    public void setRefreshTokenTtlDays(long refreshTokenTtlDays) { this.refreshTokenTtlDays = refreshTokenTtlDays; }
}
