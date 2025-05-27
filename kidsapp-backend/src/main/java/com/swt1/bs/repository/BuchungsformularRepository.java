package com.swt1.bs.repository;

import com.swt1.bs.entity.Buchungsformular;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BuchungsformularRepository extends CrudRepository<Buchungsformular, Long> {

}
