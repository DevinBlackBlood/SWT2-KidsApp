package com.swt1.bs.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Umfrage extends Nachricht {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String inhalt;

    @ElementCollection
    private List<String> optionen;


    public Umfrage(List<String> optionen, String inhalt) {
        this.inhalt = inhalt;
        this.optionen = optionen;
    }

}
