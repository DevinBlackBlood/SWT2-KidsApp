package com.swt1.bs.apibackend;

import org.eclipse.paho.client.mqttv3.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.integration.annotation.MessagingGateway;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.integration.channel.DirectChannel;
import org.springframework.integration.core.MessageProducer;
import org.springframework.integration.mqtt.core.DefaultMqttPahoClientFactory;
import org.springframework.integration.mqtt.core.MqttPahoClientFactory;
import org.springframework.integration.mqtt.inbound.MqttPahoMessageDrivenChannelAdapter;
import org.springframework.integration.mqtt.outbound.MqttPahoMessageHandler;
import org.springframework.integration.mqtt.support.DefaultPahoMessageConverter;
import org.springframework.integration.mqtt.support.MqttHeaders;
import org.springframework.integration.support.MessageBuilder;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.MessageHandler;
import org.springframework.messaging.MessagingException;

import java.util.UUID;

@Configuration
public class MqttBeans {

    @Bean
    public MqttPahoClientFactory mqttClientFactory() {
        DefaultMqttPahoClientFactory factory = new DefaultMqttPahoClientFactory();
        MqttConnectOptions options = new MqttConnectOptions();

        options.setServerURIs(new String[]{"tcp://mqtt-broker:1883"});
        options.setUserName("admin");
        options.setPassword("123".toCharArray());
        options.setCleanSession(true);
        options.setKeepAliveInterval(60);


        factory.setConnectionOptions(options);

        return factory;
    }

    @Bean
    public MessageChannel mqttInputChannel() {
        return new DirectChannel();
    }

    @Bean
    public MessageProducer inbound() {
        // Hier abonniert das API-Backend die Topics, um Nachrichten vom kidsapp-backend zu empfangen
        MqttPahoMessageDrivenChannelAdapter adapter = new MqttPahoMessageDrivenChannelAdapter(
                "api-client", mqttClientFactory(), "api-to-kidsapp", "kidsapp-to-api");

        adapter.setCompletionTimeout(5000);
        adapter.setConverter(new DefaultPahoMessageConverter());
        adapter.setQos(1);
        adapter.setOutputChannel(mqttInputChannel());
        return adapter;
    }

    @Bean
    @ServiceActivator(inputChannel = "mqttInputChannel")
    public MessageHandler handler() {
        return new MessageHandler() {
            @Override
            public void handleMessage(Message<?> message) throws MessagingException {
                String topic = message.getHeaders().get(MqttHeaders.RECEIVED_TOPIC).toString();

                System.out.println("MQTT Nachricht im API-Backend empfangen auf Topic: " + topic);
                System.out.println("Payload: " + message.getPayload());

                if (topic.equals("api-to-kidsapp")) {
                    System.out.println("Nachricht vom API-Backend an kidsapp-backend erhalten");
                } else if (topic.equals("kidsapp-to-api")) {
                    System.out.println("Antwort vom kidsapp-backend erhalten");
                }
            }
        };
    }

    @Bean
    @Lazy
    public MessageChannel mqttOutboundChannel() {
        return new DirectChannel();
    }

    @Bean
    @ServiceActivator(inputChannel = "mqttOutboundChannel")
    public MessageHandler mqttOutbound() {
        MqttPahoMessageHandler handler = new MqttPahoMessageHandler("api-serverOut" + UUID.randomUUID(), mqttClientFactory());

        handler.setAsync(true);
        handler.setDefaultTopic("api-to-kidsapp");
        return handler;
    }

    public void sendeNachrichtAnKidsapp(String payload) {
        Message<String> message = MessageBuilder.withPayload(payload)
                .setHeader(MqttHeaders.TOPIC, "api-to-kidsapp")
                .build();

        mqttOutboundChannel().send(message);
    }
}
