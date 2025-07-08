package com.swt1.bs;

import org.springframework.context.annotation.Configuration;
import org.springframework.integration.mqtt.core.DefaultMqttPahoClientFactory;
import org.springframework.integration.mqtt.core.MqttPahoClientFactory;

@Configuration
public class MqttBeans {

 public MqttPahoClientFactory getMqttClientFactory() {
   DefaultMqttPahoClientFactory factory = new DefaultMqttPahoClientFactory();

 }

}
