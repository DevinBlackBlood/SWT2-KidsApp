package com.swt1.bs.entity;

import com.swt1.bs.utils.Adresse;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Veranstaltung {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(fetch = FetchType.EAGER)
    private Adresse adresse;

    private String beschreibung;

    private String veranstaltungName;

    @OneToMany(targetEntity = Benutzer.class)
    private List<Benutzer> benutzer;


}
