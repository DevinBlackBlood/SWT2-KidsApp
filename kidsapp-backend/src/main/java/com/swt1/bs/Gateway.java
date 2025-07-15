package com.swt1.bs;

import org.springframework.integration.annotation.MessagingGateway;

@MessagingGateway(defaultRequestChannel = "mqttOutboundChannel")
public interface Gateway {
    void sendToMqtt(String data);
}
