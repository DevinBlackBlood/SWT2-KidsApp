package com.swt1.bs.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
public class Umfrage extends Nachricht {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String inhalt;

    @ElementCollection
    private List<String> optionen;

    public Umfrage(List<String> optionen, String inhalt, Chat chat) {
        super(chat, inhalt);
        this.optionen = optionen;
    }

    public Umfrage() {
        super();
    }
}
