package com.swt1.bs.apibackend.service;

import com.swt1.bs.apibackend.MqttBeans;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ApiService {
    private final RestTemplate restTemplate;
    private final MqttBeans mqttBeans;

    public ApiService(MqttBeans mqttBeans) {
        this.restTemplate = new RestTemplate();
        this.mqttBeans = mqttBeans;
    }

    public void fetchDataAndSendToMqtt() {
        String url = "https://api.restful-api.dev/objects";
        String data = restTemplate.getForObject(url, String.class);
        mqttBeans.sendeNachrichtAnKidsapp(data);
    }
}
