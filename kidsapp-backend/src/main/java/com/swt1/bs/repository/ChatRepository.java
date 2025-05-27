package com.swt1.bs.repository;

import com.swt1.bs.entity.Chat;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChatRepository extends CrudRepository<Chat, Long> {

    @Query(value = "UPDATE chat " +
            "SET name = chat.name, " +
            "gruppenbild = chat.gruppenbild, " +
            "mitglieder = chat.mitglieder",
            nativeQuery = true)
    Chat updateChatById(Long id, Chat chat);
}
