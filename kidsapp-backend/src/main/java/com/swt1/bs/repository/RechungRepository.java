package com.swt1.bs.repository;

import com.swt1.bs.entity.Rechung;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RechungRepository extends CrudRepository<Rechung, Long> {

    @Query(value = "UPDATE rechung re SET re.rechnungsanschrift = r.rechnungsanschrift," +
            " re.veranstalteranschrift = r.veranstalteranschrift," +
            " re.faelligskeitdatum = r.faelligskeitdatum" +
            " WHERE re.id = :id ", nativeQuery = true)
     Rechung updateRechung(Long id, Rechung r);
}
