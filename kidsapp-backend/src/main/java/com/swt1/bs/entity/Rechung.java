package com.swt1.bs.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;
import java.sql.Time;

@Entity
@Data
public class Rechung {

    @Id
    private Long id;

    private Integer rechnungsnummer;

    private Anschrifft rechnungsanschrift;

    private Anschrifft veranstalteranschrift;

    private Time ausstellungszeitpunkt;

    private Date faelligkeitsdatum;

    private byte[] pdf;

    @OneToOne(targetEntity = Ticket.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Ticket ticket;
}
