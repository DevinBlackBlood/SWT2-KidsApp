package com.swt1.bs.service;

import com.swt1.bs.entity.Chat;
import com.swt1.bs.entity.Veranstaltung;
import com.swt1.bs.repository.ChatRepository;
import com.swt1.bs.repository.VeranstaltungRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.NativeQuery;
import org.springframework.stereotype.Service;

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


}
