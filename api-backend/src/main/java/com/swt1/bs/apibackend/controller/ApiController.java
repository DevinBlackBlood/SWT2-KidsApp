package com.swt1.bs.apibackend.controller;


import com.swt1.bs.apibackend.MqttBeans;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api")
public class ApiController {

    @Autowired
    private MqttBeans mqtt;

    @GetMapping("/status")
    public ResponseEntity<String> status() {
        return ResponseEntity.ok("API-Backend läuft!");
    }

    @PostMapping("/send")
    public ResponseEntity<String> sendMessage(@RequestBody String message) {
        mqtt.sendeNachrichtAnKidsapp(message);
        System.out.println("Nachricht von UI erhalten: " + message);

        return ResponseEntity.ok("Nachricht wurde gesendet: " + message);
    }
}
