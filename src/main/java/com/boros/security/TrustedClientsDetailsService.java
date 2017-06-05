package com.boros.security;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.provider.ClientDetails;
import org.springframework.security.oauth2.provider.ClientDetailsService;
import org.springframework.security.oauth2.provider.ClientRegistrationException;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;

@Getter
@Service
@RequiredArgsConstructor
public class TrustedClientsDetailsService implements ClientDetailsService {

    private final Map<String, ClientDetails> clients;

    @Override
    public ClientDetails loadClientByClientId(String clientId) throws ClientRegistrationException {
        return Optional.ofNullable(clients.get(clientId)).orElseThrow(() -> new ClientRegistrationException("No such client"));
    }
}
