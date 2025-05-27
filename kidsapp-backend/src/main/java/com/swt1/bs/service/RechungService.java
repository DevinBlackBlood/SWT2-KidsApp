package com.swt1.bs.service;

import com.swt1.bs.entity.Buchungsformular;
import com.swt1.bs.entity.Rechung;
import com.swt1.bs.entity.Ticket;
import com.swt1.bs.repository.BenutzerRepository;
import com.swt1.bs.repository.RechungRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.time.LocalTime;
import java.util.List;

@Service
public class RechungService {

    @Autowired
    private RechungRepository rechungRepository;

    //TODO
    public void generieren(Ticket ticket, Buchungsformular buchungsformular) {

        Rechung rechung = new Rechung();
        LocalTime now = LocalTime.now();
        rechung.setAusstellungszeitpunkt(Time.valueOf(now));

    }

    public Rechung addRechung(Rechung rechung) {
        if (rechung != null) {
            rechungRepository.save(rechung);
        }

        return null;
    }

    public List<Rechung> getRechungen() {

        return (List<Rechung>) rechungRepository.findAll();
    }

    public Rechung getRechung(Long id) {

        if (id >= 1 && rechungRepository.existsById(id)) {
            return rechungRepository.findById(id).get();
        }
        return null;
    }

    public Rechung updateRechungById(Long id, Rechung rechung) {

        if (rechung != null && id >= 1 && rechungRepository.existsById(id)) {

            return rechungRepository.updateRechung(id, rechung);
        }
        return null;
    }

    public void deleteRechung(Long id) {
        if(id >= 1 && rechungRepository.existsById(id)) {
            rechungRepository.deleteById(id);
        }
    }
}
