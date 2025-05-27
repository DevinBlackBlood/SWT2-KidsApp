package com.swt1.bs.entity;

import com.swt1.bs.utils.Anschrift;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Buchungsformular {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Anschrift rechnungsanschrift;
    private String email;
    private int teilnehmeranzahl;
}