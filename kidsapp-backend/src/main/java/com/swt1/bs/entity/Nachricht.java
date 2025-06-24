package com.swt1.bs.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Entity
public class Nachricht {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String inhalt;
    private Date datum;

    @ManyToOne(targetEntity = Chat.class)
    private Chat chat;

    public Nachricht(String inhalt) {
        this.inhalt = inhalt;
    }

    public Nachricht() {

    }
}
