package com.swt1.bs.repository;

import com.swt1.bs.entity.Veranstaltung;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VeranstaltungRepository extends CrudRepository<Veranstaltung, Long> {

    @Query(value = "select * from public.veranstaltung v join public.veranstaltung_benutzer vb on v.id = vb.veranstaltung_id where vb.benutzer_id = :id", nativeQuery = true)
    List<Veranstaltung> findVeranstaltungenForUser(@Param("id") Long id);

    @Transactional
    @Modifying
    @Query(value = "delete from public.veranstaltung_benutzer vb where vb.benutzer_id = :userId and vb.veranstaltung_id = :eventId;", nativeQuery = true)
    void deleteVeranstaltungForUser(@Param("userId") Long userId, @Param("eventId") Long eventId);
}
