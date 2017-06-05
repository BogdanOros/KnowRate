package com.boros.skill;

import com.boros.account.Account;
import com.boros.account.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequiredArgsConstructor
public class SkillController {

    private final AccountRepository accountRepository;

    @CrossOrigin(origins = "*")
    @PostMapping(path = "api/accounts/{id}/skill")
    @Transactional
    public ResponseEntity<Skill> saveSkill(@RequestBody Skill skill, @PathVariable long id) {
        Account account = accountRepository.findOne(id);

        account.getSkills().add(skill);
        accountRepository.save(account);
        return ResponseEntity.ok(skill);
    }

    @CrossOrigin(origins = "*")
    @PutMapping(path = "api/accounts/{id}/skill")
    @Transactional
    public ResponseEntity<Skill> deleteSkill(@RequestBody Skill skill, @PathVariable long id) {
        Account account = accountRepository.findOne(id);

        List<Skill> collect = account.getSkills().stream().filter(skill1 -> skill1.getName().equals(skill.getName())).collect(Collectors.toList());
        account.setSkills(collect);
        accountRepository.save(account);
        return ResponseEntity.ok(skill);
    }

}
