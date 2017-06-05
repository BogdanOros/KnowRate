package com.boros.account;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequiredArgsConstructor
public class AccountController {

    private final AccountRepository repository;

    @CrossOrigin(origins = "*")
    @PostMapping(path = "api/register")
    public Account registerAccount(@RequestBody Account account, HttpServletRequest request, HttpServletResponse response) {
        return repository.save(account);
    }

    @CrossOrigin(origins = "*")
    @GetMapping(path = "api/auth")
    public ResponseEntity<Account> authorizeAccount(@RequestParam(name = "username", required = false) String username, @RequestParam(name = "password", required = false) String password) {
        Account account = repository.findByEmail(username).orElseThrow(() -> new IllegalArgumentException("Account not found"));
        if (!account.getPassword().equals(password)) {
            throw new IllegalArgumentException("Incorrect password");
        }
        return ResponseEntity.ok(account);
    }

}
