package com.swt1.bs.apibackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.integration.mqtt.support.MqttHeaders;
import org.springframework.integration.support.MessageBuilder;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.stereotype.Service;

@Service
public class MqttService {

    @Autowired
    @Qualifier("mqttOutboundChannel")
    private MessageChannel mqttOutboundChannel;

    public void sendeNachrichtAnKidsapp(String payload) {
        Message<String> message = MessageBuilder.withPayload(payload)
                .setHeader(MqttHeaders.TOPIC, "api-to-kidsapp")
                .build();
        mqttOutboundChannel.send(message);
    }
}
