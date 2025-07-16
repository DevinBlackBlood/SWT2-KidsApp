package com.swt1.bs.service;

import com.swt1.bs.entity.Benutzer;
import com.swt1.bs.entity.Veranstaltung;
import com.swt1.bs.repository.BenutzerRepository;
import com.swt1.bs.repository.VeranstaltungRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Transactional
@Service
public class BenutzerService {

    @Autowired
    BenutzerRepository benutzerRepository;

    @Autowired
    VeranstaltungRepository veranstaltungRepository;

    public List<Benutzer> getBenutzer() {

        return (List<Benutzer>) benutzerRepository.findAll();
    }

    public Benutzer getBenutzerById(long id) {
        if (id >= 1) {
            return benutzerRepository.findById(id).get();
        }
        return null;
    }

    public Benutzer addBenutzer(Benutzer benutzer) {

        if (benutzer != null) {
            return benutzerRepository.save(benutzer);
        }
        return null;
    }

    public void deleteBenutzer(long id) {
        if(id >= 1 && benutzerRepository.existsById(id)) {

            benutzerRepository.deleteById(id);
        }
    }

    public Benutzer updateBenutzer(long id, Benutzer benutzer) {

        if (benutzer != null && id >= 1 && benutzerRepository.existsById(id)) {

            return benutzerRepository.updateBenutzer(id, benutzer);


        }

        return null;

    }

    public void addFavoriteToUser(Long userId, Long veranstaltungId) {
        Benutzer benutzer = benutzerRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("Benutzer nicht gefunden: " + userId));

        Veranstaltung veranstaltung = veranstaltungRepository.findById(veranstaltungId)
                .orElseThrow(() -> new EntityNotFoundException("Veranstaltung nicht gefunden: " + veranstaltungId));

        benutzer.addFavorite(veranstaltung);
        benutzerRepository.save(benutzer);
    }

    public List<Veranstaltung> getFavorites(Long userId) {
        return benutzerRepository.findById(userId).get().getFavoriten();
    }

    public void entferneFavorit(Long benutzerId, Long veranstaltungId) {
        Benutzer benutzer = benutzerRepository.findById(benutzerId)
                .orElseThrow(() -> new EntityNotFoundException("Benutzer nicht gefunden"));

        Veranstaltung veranstaltung = veranstaltungRepository.findById(veranstaltungId)
                .orElseThrow(() -> new EntityNotFoundException("Veranstaltung nicht gefunden"));

        benutzer.getFavoriten().remove(veranstaltung);
        benutzerRepository.save(benutzer);
    }
}
