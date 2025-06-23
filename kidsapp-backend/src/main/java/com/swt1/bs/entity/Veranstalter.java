package com.swt1.bs.entity;

import com.swt1.bs.utils.Adresse;

import jakarta.persistence.*;

import lombok.Data;

import java.util.List;

@Entity
@Data
public class Veranstalter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Adresse adresse;

    private String veranstalterName;

    private String email;

    private String telefonnummer;

    @OneToMany(targetEntity = Benutzer.class)
    private List<Benutzer> Mitglieder;

    @OneToMany(targetEntity = Benutzer.class)
    private List<Benutzer> Ansprechpersonen;

}
