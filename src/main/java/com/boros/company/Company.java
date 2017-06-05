package com.boros.company;

import com.boros.skill.Skill;
import lombok.Data;

import javax.persistence.*;
import java.util.List;


@Data
@Entity
public class Company {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @Embedded
    private Address address;

    private String imageUrl;

    private String description;

    @OneToMany(cascade = {CascadeType.PERSIST})
    private List<Skill> skills;

}
