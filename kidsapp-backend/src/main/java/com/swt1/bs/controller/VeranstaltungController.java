package com.swt1.bs.controller;

import com.swt1.bs.Gateway;
import com.swt1.bs.MqttBeans;
import com.swt1.bs.entity.Veranstaltung;
import com.swt1.bs.repository.VeranstaltungRepository;
import com.swt1.bs.service.VeranstaltungService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(maxAge = 3600)
@RestController
public class VeranstaltungController {

    @Autowired
    private VeranstaltungService veranstaltungService;

    @Autowired
    private Gateway gateway;

    @GetMapping("veranstaltungen")
    public List<Veranstaltung> veranstaltungen() {

        return (List<Veranstaltung>) veranstaltungService.findAll();
    }

    @GetMapping("/loeschen/veranstaltung")
    public boolean loeschenVeranstaltung(Long id) {
        return veranstaltungService.loeschenVeranstaltung(id);
    }

    @GetMapping("/speichern/veranstaltung")
    public Veranstaltung speichernVeranstaltung(Veranstaltung newVeranstaltung) {

       return veranstaltungService.speichernVeranstaltung(newVeranstaltung);
    }

    @GetMapping("veranstaltungen/user/{id}")
    public List<Veranstaltung> getVeranstaltungenForUser(@PathVariable Long id) {
        return veranstaltungService.getVeranstaltungenForUser(id);
    }

    @GetMapping("veranstaltung/{eventId}/delete/user/{userId}/")
    public void deleteVeranstaltungForUser(@PathVariable Long userId, @PathVariable Long eventId) {
        veranstaltungService.deleteVeranstaltungForUser(userId, eventId);
    }

    @GetMapping("/test")
    public String testMQTT() {
        System.out.println("TEST-Endpoint aufgerufen!");
        gateway.sendToMqtt("DER TEEEEEEEEEEEESTTTTTTTTTTT");
        return "Nachricht gesendet!";
    }

@GetMapping("veranstaltungen/status/{status}")
    public List<Veranstaltung> getVeranstaltungenByStatus(@PathVariable String status) {
        return veranstaltungService.getVeranstaltungenByStatus(status);
    }

}
