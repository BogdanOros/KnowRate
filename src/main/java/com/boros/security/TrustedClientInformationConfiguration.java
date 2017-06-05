package com.boros.security;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.provider.ClientDetails;
import org.springframework.security.oauth2.provider.client.BaseClientDetails;

@Configuration
public class TrustedClientInformationConfiguration {

    @Bean(name = "web")
    @ConfigurationProperties(prefix = "clients.web")
    public ClientDetails getDefaultClientDetails() {
        return new BaseClientDetails();
    }

}
