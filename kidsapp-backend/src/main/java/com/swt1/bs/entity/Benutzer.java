package com.swt1.bs.entity;

import com.swt1.bs.utils.Adresse;
import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Data
public class Benutzer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String vorname;

    private String nachname;

    private String email;

    private String passwort;

    private Adresse adresse;

    private byte[] profilebild;

    private String spitzname;

    private boolean gesperrt;

    private boolean administrator;

    @ManyToMany(targetEntity = Ticket.class)
    private List<Ticket> tickets;

    @OneToMany(targetEntity = Nachricht.class)
    private List<Nachricht> nachrichten;

}
