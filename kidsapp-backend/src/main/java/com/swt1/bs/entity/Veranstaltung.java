package com.swt1.bs.entity;

import com.swt1.bs.utils.Adresse;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.boot.context.properties.bind.DefaultValue;

import java.util.List;

@Data
@Entity
public class Veranstaltung {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    private Adresse adresse;

    private String status;

    private String beschreibung;

    private String veranstaltungName;

    @ManyToOne(fetch = FetchType.EAGER)
    private Veranstalter veranstalter;

    @ManyToMany(targetEntity = Benutzer.class)
    @Nullable
    @JoinTable(
            name = "veranstaltung_benutzer",
            joinColumns = @JoinColumn(name = "veranstaltung_id"),
            inverseJoinColumns = @JoinColumn(name = "benutzer_id")
    )
    private List<Benutzer> benutzer;


}
