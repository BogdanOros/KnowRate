package com.boros.account;

import com.boros.skill.Skill;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Account {

    @Id
    @GeneratedValue
    private Long id;

    private String email;
    private String password;

    private String firstName;
    private String lastName;

    private String birthDate;

    private String description;

    @OneToMany(cascade = {CascadeType.PERSIST})
    private List<Account> accounts;

    @OneToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private List<Skill> skills;


}
