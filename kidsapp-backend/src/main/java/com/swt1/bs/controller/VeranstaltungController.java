package com.swt1.bs.controller;

import com.swt1.bs.entity.Veranstaltung;
import com.swt1.bs.repository.VeranstaltungRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(maxAge = 3600)
@RestController
public class VeranstaltungController {

    @Autowired
    private VeranstaltungRepository veranstaltungRepository;

    @GetMapping("veranstaltungen")
    public List<Veranstaltung> veranstaltungen() {

        return (List<Veranstaltung>) veranstaltungRepository.findAll();
    }

    @GetMapping("/loeschen/veranstaltung")
    public boolean loeschenVeranstaltung(Long id) {
        Optional<Veranstaltung> v = veranstaltungRepository.findById(id);

        if(v.isPresent()) {
            veranstaltungRepository.delete(v.get());
            return true;
        }
        return false;
    }

    @GetMapping("/speichern/veranstaltung")
    public Veranstaltung speichernVeranstaltung(Veranstaltung newVeranstaltung) {

        if (veranstaltungRepository.findById(newVeranstaltung.getId()).isPresent()){

            return  veranstaltungRepository.save(newVeranstaltung);
        }

        return null;
    }

    @GetMapping("veranstaltungen/user/{id}")
    public List<Veranstaltung> getVeranstaltungenForUser(@PathVariable Long id) {
        return veranstaltungRepository.findVeranstaltungenForUser(id);
    }

    @GetMapping("veranstaltung/{eventId}/delete/user/{userId}/")
    public void deleteVeranstaltungForUser(@PathVariable Long userId, @PathVariable Long eventId) {
        veranstaltungRepository.deleteVeranstaltungForUser(userId, eventId);
    }




}
