package com.swt1.bs.repository;

import com.swt1.bs.entity.Umfrage;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UmfrageRepository extends CrudRepository<Umfrage, Long> {
}
