package com.swt1.bs.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor  // No-argument constructor
@AllArgsConstructor
public class Chat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private byte[] gruppenbild;

    @ManyToMany(targetEntity = Benutzer.class)
    private List<Benutzer> benutzer;

    @OneToMany(mappedBy = "chat", targetEntity = Nachricht.class)
    private List<Nachricht> nachrichten;

}
