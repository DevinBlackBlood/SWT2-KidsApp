package com.swt1.bs.controller;

import com.swt1.bs.entity.Benutzer;
import com.swt1.bs.entity.Veranstaltung;
import com.swt1.bs.service.BenutzerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api/benutzer")
public class BenutzerController {

    @Autowired
    BenutzerService benutzerService;

    @GetMapping("")
    public List<Benutzer> getBenutzer() {
        return benutzerService.getBenutzer();
    }

    @GetMapping("favorites/{userId}")
    public List<Veranstaltung> getFavoritesForUser(@PathVariable Long userId) {
        return benutzerService.getFavorites(userId);
    }

    @PostMapping("/{benutzerId}/favorit/{veranstaltungId}")
    public void fuegeFavoritHinzu(@PathVariable Long benutzerId, @PathVariable Long veranstaltungId) {
        benutzerService.addFavoriteToUser(benutzerId, veranstaltungId);
    }
    @DeleteMapping("/{benutzerId}/favoriten/{veranstaltungId}")
    public void entferneFavorit(@PathVariable Long benutzerId, @PathVariable Long veranstaltungId) {
        benutzerService.entferneFavorit(benutzerId, veranstaltungId);
    }

    @GetMapping("/hallo")
    public String hallo() {
        return "Hallo";
    }
}
