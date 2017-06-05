package com.boros.security;

import lombok.RequiredArgsConstructor;
import org.apache.tomcat.jdbc.pool.DataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.oauth2.config.annotation.builders.ClientDetailsServiceBuilder;
import org.springframework.security.oauth2.config.annotation.builders.InMemoryClientDetailsServiceBuilder;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.provider.ClientDetails;
import org.springframework.security.oauth2.provider.token.DefaultTokenServices;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.JdbcTokenStore;

import java.util.Optional;
import java.util.Set;

@Configuration
@EnableResourceServer
@EnableAuthorizationServer
@RequiredArgsConstructor
public class AuthorizationServerConfiguration extends AuthorizationServerConfigurerAdapter {

    private final AuthenticationManager manager;
    private final TrustedClientsDetailsService holder;

    private final DataSource dataSource;

    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        ClientDetailsServiceBuilder<InMemoryClientDetailsServiceBuilder> builder = clients.inMemory();

        for (ClientDetails client : holder.getClients().values()) {
            builder = addClientToBuilder(builder, client);
        }
    }

    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        endpoints
                .authenticationManager(manager)
                .tokenStore(getTokenStore())
                .pathMapping("oauth/token", "accounts/authorize");
    }

    @Bean
    public TokenStore getTokenStore() {
        return new JdbcTokenStore(dataSource);
    }

    @Bean
    public DefaultTokenServices getDefaultTokenService() {
        DefaultTokenServices defaultTokenService = new DefaultTokenServices();
        defaultTokenService.setTokenStore(getTokenStore());

        return defaultTokenService;
    }

    private ClientDetailsServiceBuilder<InMemoryClientDetailsServiceBuilder> addClientToBuilder(
            ClientDetailsServiceBuilder<InMemoryClientDetailsServiceBuilder> builder, ClientDetails client) {
        return builder
                .withClient(client.getClientId())
                .secret(client.getClientSecret())
                .authorizedGrantTypes(convertStringSetToStringArray(client.getAuthorizedGrantTypes()))
                .scopes(convertStringSetToStringArray(client.getScope()))
                .accessTokenValiditySeconds(getValiditySeconds(client.getAccessTokenValiditySeconds()))
                .refreshTokenValiditySeconds(getValiditySeconds(client.getRefreshTokenValiditySeconds()))
                .and();
    }

    private String[] convertStringSetToStringArray(Set<String> set) {
        return set.stream().toArray(String[]::new);
    }

    private int getValiditySeconds(Integer value) {
        return Optional.ofNullable(value).orElse(0);
    }

}
