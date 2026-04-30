package com.peopleflow;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@SpringBootApplication
@ConfigurationPropertiesScan   // picks up JwtProperties and any future @ConfigurationProperties beans
public class PeopleFlowApplication {
    public static void main(String[] args) {
        SpringApplication.run(PeopleFlowApplication.class, args);
    }
}
