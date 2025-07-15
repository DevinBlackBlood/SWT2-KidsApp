package com.swt1.bs.apibackend.controller;


import com.swt1.bs.apibackend.MqttBeans;
import com.swt1.bs.apibackend.service.ApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api")
public class ApiController {
    private final ApiService apiService;

    public ApiController(ApiService apiService) {
        this.apiService = apiService;
    }

    @GetMapping("/send-data")
    public ResponseEntity<String> sendData() {
        apiService.fetchDataAndSendToMqtt();
        return ResponseEntity.ok("Daten gesendet");
    }

    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("Test OK");
    }
}
