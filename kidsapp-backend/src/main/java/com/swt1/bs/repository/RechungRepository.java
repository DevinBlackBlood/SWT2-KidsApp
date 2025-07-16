package com.swt1.bs.repository;

import com.swt1.bs.entity.Rechnung;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RechungRepository extends CrudRepository<Rechnung, Long> {

    @Query(value = "UPDATE rechung re SET re.rechnungsanschrift = r.rechnungsanschrift," +
            " re.veranstalteranschrift = r.veranstalteranschrift," +
            " re.faelligskeitdatum = r.faelligskeitdatum" +
            " WHERE re.id = :id ", nativeQuery = true)
    Rechnung updateRechung(Long id, Rechnung r);
}
