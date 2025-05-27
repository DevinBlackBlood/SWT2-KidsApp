package com.swt1.bs.repository;

import com.swt1.bs.entity.Nachricht;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NachrichtRepository extends CrudRepository<Nachricht, Long> {
}
