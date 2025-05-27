package com.swt1.bs.repository;

import com.swt1.bs.entity.Veranstaltung;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VeranstaltungRepository extends CrudRepository<Veranstaltung, Long> {
}
