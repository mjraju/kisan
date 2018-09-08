package com.kisan.repository;

import com.kisan.model.TransactionDetails;
import org.springframework.data.repository.CrudRepository;

public interface TransactionDetailsRepository extends CrudRepository<TransactionDetails,Integer> {

	TransactionDetails findBytransId(int transId);
}
