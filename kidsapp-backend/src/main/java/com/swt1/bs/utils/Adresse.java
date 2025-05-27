package com.swt1.bs.utils;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Embeddable
@Data
public class Adresse {
    private String strasse;
    private String plz;
    private String ort;
    private String land;
}

