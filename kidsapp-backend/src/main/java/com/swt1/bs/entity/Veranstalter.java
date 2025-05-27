package com.swt1.bs.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Veranstalter {

    @Id
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
