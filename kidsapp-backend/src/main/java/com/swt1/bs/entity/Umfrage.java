package com.swt1.bs.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Umfrage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String inhalt;

    @ElementCollection
    private List<String> optionen;

    public Umfrage(String inhalt, List<String> optionen) {
        this.inhalt = inhalt;
        this.optionen = optionen;
    }

    public Umfrage() {

    }
}
