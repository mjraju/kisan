package com.kisan.repository;

import com.kisan.model.TransactionDetails;
import org.springframework.data.repository.CrudRepository;

import java.math.BigInteger;

public interface TransactionDetailsRepository extends CrudRepository<TransactionDetails,Integer> {

	TransactionDetails findByTransId(int transId);
}
