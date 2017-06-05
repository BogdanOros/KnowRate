package com.boros.company;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;

@Data
@Embeddable
@NoArgsConstructor
@AllArgsConstructor
public class Address {

    private String address;

    private double ltt;

    private double lng;

}
