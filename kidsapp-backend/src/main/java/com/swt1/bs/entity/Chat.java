package com.swt1.bs.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;

import java.util.List;

@Data
@Entity
public class Chat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private byte[] gruppenbild;

    @ManyToMany(targetEntity = Benutzer.class)
    private List<Benutzer> benutzer;

    @Getter
    @OneToMany(mappedBy = "chat", targetEntity = Nachricht.class)
    private List<Nachricht> nachrichten;

}
