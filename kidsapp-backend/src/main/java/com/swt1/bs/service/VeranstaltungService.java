package com.swt1.bs.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.swt1.bs.dto.VeranstaltungDTO;
import com.swt1.bs.entity.Chat;
import com.swt1.bs.entity.Veranstaltung;
import com.swt1.bs.repository.ChatRepository;
import com.swt1.bs.repository.VeranstaltungRepository;
import com.swt1.bs.utils.Adresse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.NativeQuery;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class VeranstaltungService {

    @Autowired
    private VeranstaltungRepository veranstaltungRepository;

    @Autowired
    private ChatRepository chatRepository;

    public List<Veranstaltung> findAll() {
        return (List<Veranstaltung>) veranstaltungRepository.findAll();
    }

    public Optional<Veranstaltung> findById(Long id) {
        return veranstaltungRepository.findById(id);
    }

    @NativeQuery(value = "SELECT bf.teilnehmerAnzahl FROM veranstaltung va INNER JOIN buchungsformular bf ON XXXXXXXX ")
    public Boolean isPlatzFrei(Veranstaltung veranstaltung) {
        return false;
    }

    public Optional<Chat> getVeranstalterChat(Veranstaltung veranstaltung) {
        return chatRepository.findById(1L);
    }

    public Veranstaltung addVeranstaltung(Veranstaltung veranstaltung) {
        return veranstaltungRepository.save(veranstaltung);
    }

    public List<Veranstaltung> findAllVeranstaltungen() {
        return (List<Veranstaltung>) veranstaltungRepository.findAll();
    }

    public Veranstaltung updateVeranstaltung(Veranstaltung veranstaltung) {
        return veranstaltungRepository.save(veranstaltung);
    }

    public void deleteVeranstaltung(Veranstaltung veranstaltung) {
        veranstaltungRepository.delete(veranstaltung);
    }

    public void verarbeiteNachricht(String jsonPayload) {
        ObjectMapper objectMapper = new ObjectMapper();

        try {
            VeranstaltungDTO[] produkte = objectMapper.readValue(jsonPayload, VeranstaltungDTO[].class);

            for (VeranstaltungDTO p : produkte) {
                Veranstaltung v = new Veranstaltung();
                v.setVeranstaltungName(p.name);

                if (p.data != null) {
                    v.setBeschreibung(objectMapper.writeValueAsString(p.data));
                } else {
                    v.setBeschreibung("Keine Detaildaten vorhanden");
                }

                veranstaltungRepository.save(v);
                System.out.println("Veranstaltung gespeichert: " + v.getVeranstaltungName());
            }

        } catch (Exception e) {
            System.err.println("Fehler beim Parsen/Speichern: " + e.getMessage());
        }
    }


}
