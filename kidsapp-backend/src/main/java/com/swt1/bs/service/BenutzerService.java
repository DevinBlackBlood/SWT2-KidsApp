package com.swt1.bs.service;

import com.swt1.bs.entity.Benutzer;
import com.swt1.bs.repository.BenutzerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BenutzerService {

    @Autowired
    BenutzerRepository benutzerRepository;

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
}
