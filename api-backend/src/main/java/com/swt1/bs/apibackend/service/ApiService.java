package com.swt1.bs.apibackend.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ApiService {

    private final RestTemplate restTemplate;
    private final MqttService mqttService;

    public ApiService(MqttService mqttService) {
        this.restTemplate = new RestTemplate();
        this.mqttService = mqttService;
    }

    public void fetchDataAndSendToMqtt() {
        String url = "https://api.restful-api.dev/objects";
        String data = restTemplate.getForObject(url, String.class);
        mqttService.sendeNachrichtAnKidsapp(data);
    }
}
