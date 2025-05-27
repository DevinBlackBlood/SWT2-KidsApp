package com.swt1.bs.entity;

import com.swt1.bs.utils.Adresse;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Veranstaltung {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Embedded
    private Adresse adresse;
    private String beschreibung;
    private String veranstaltungName;

    @OneToMany(mappedBy = "veranstaltung", targetEntity = Benutzer.class)
    private List<Benutzer> benutzer;


}
