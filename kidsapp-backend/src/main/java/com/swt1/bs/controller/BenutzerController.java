package com.swt1.bs.controller;

import com.swt1.bs.entity.Benutzer;
import com.swt1.bs.service.BenutzerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BenutzerController {

    @Autowired
    BenutzerService benutzerService;

    @GetMapping("api/benutzer")
    public List<Benutzer> getBenutzer() {

        return benutzerService.getBenutzer();
    }

    @GetMapping("hallo")
    public String hallo() {

        return "Hallo";
    }
}
