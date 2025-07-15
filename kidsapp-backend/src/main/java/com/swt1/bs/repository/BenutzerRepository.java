package com.swt1.bs.repository;

import com.swt1.bs.entity.Benutzer;
import org.springframework.data.jpa.repository.NativeQuery;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface BenutzerRepository extends CrudRepository<Benutzer, Long> {

    @Query( value = "UPDATE benutzer be " +
            "SET be.vorname = b.vorname," +
            "be.nachname = b.nachname," +
            " be.email = b.email," +
            " be.passwort = b.passwort," +
            " be.adresse = b.adresse," +
            " be.profilbild = b.profilbild " +
            "WHERE be.id = :id", nativeQuery = true)
    Benutzer updateBenutzer(Long id,Benutzer b);

}
