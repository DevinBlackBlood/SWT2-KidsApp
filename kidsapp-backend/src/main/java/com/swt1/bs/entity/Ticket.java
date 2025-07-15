package com.swt1.bs.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String pruefwert;

    private byte[] qeCode;

    private Integer teilnehmerAnzahl;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Veranstaltung veranstaltung;

    @OneToOne(targetEntity = Rechnung.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Rechnung rechung;

    @ManyToMany(targetEntity = Benutzer.class)
    private List<Benutzer> benutzers;
}
