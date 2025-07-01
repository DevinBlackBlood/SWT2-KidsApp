package com.swt1.bs.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.swt1.bs.utils.Anschrift;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;
import java.sql.Time;

@Entity
@Data
public class Rechung {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer rechnungsnummer;


    @ManyToOne(fetch = FetchType.EAGER)
    private Anschrift rechnungsanschrift;

    @ManyToOne(fetch = FetchType.EAGER)
    private Anschrift veranstalteranschrift;

    private Time ausstellungszeitpunkt;

    private Date faelligkeitsdatum;

    private byte[] pdf;

    @OneToOne(targetEntity = Ticket.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Ticket ticket;
}
