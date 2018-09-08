package com.kisan.service.impl;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kisan.model.TransactionDetails;
import com.kisan.repository.TransactionDetailsRepository;
import com.kisan.service.TransactionService;
@Service
public class TransactionServiceImpl implements TransactionService {

	@Autowired
	private TransactionDetailsRepository transactionRepo;
	@Override
	public void saveTransaction(TransactionDetails transaction) {
		try {
			if(transaction != null) {
				transaction.setCreate_date(new Date(System.currentTimeMillis()));
				transactionRepo.save(transaction);
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
