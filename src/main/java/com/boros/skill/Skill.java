package com.boros.skill;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Data
@Entity
public class Skill implements Serializable {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private Integer rating;

}
