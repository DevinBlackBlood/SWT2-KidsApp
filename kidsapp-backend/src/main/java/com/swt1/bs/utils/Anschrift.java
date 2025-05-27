package com.swt1.bs.utils;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Embeddable
@Data
public class Anschrift {
    private String vorname;
}
