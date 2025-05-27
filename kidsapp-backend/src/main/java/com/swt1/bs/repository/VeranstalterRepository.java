package com.swt1.bs.repository;

import com.swt1.bs.entity.Veranstalter;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VeranstalterRepository extends CrudRepository<Veranstalter, Long> {
}
