package com.swt1.bs.service;

import com.swt1.bs.entity.Chat;
import com.swt1.bs.entity.Nachricht;
import com.swt1.bs.entity.Umfrage;
import com.swt1.bs.repository.ChatRepository;
import com.swt1.bs.repository.NachrichtRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommunityService {

    @Autowired
    private ChatRepository chatRepository;

    @Autowired
    private NachrichtRepository nachrichtRepository;

    public Optional<Chat> findChatById(Long id) {
        return chatRepository.findById(id);
    }

    public List<Chat> findAllChats() {
        return (List<Chat>) chatRepository.findAll();
    }

    public Nachricht sendeNachricht(Chat chat, String inhalt) {
        return new Nachricht(chat, inhalt);
    }

    public void sendeUmfrage(String inhalt, String[] optionen, Long chatId) {}

    private Nachricht createNachricht(Chat chat, String inhalt) {
        return new Nachricht(chat, inhalt);
    }

    private Umfrage createUmfrage(String inhalt, String[] optionen, Long chatId) {
        return new Umfrage();
    }

    public Chat addChat(Chat chat) {
        return chatRepository.save(chat);
    }

    public Chat getChatById(Long chatId) {
        return chatRepository.findById(chatId).get();
    }

    public Chat updateChatById(Long id, Chat chat) {
        return chatRepository.updateChatById(id, chat);
    }

    public void deleteChat(Long chatId) {
        chatRepository.deleteById(chatId);
    }

    public Nachricht addNachricht(Nachricht nachricht) {
        return nachrichtRepository.save(nachricht);
    }

    public List<Nachricht> findAllNachrichten() {
        return (List<Nachricht>) nachrichtRepository.findAll();
    }

    public Nachricht getNachrichtById(Long nachrichtId) {
        return nachrichtRepository.findById(nachrichtId).get();
    }

    public Nachricht updateNachricht(Nachricht nachricht) {
        return nachrichtRepository.save(nachricht);
    }

    public void deleteNachricht(Long nachrichtId) {
        nachrichtRepository.deleteById(nachrichtId);
    }
}
