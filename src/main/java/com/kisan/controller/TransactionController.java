package com.kisan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kisan.model.TransactionDetails;
import com.kisan.service.TransactionService;
@RestController
@CrossOrigin
public class TransactionController {
	@Autowired
	TransactionService transactionService;

	@PostMapping("/SaveTransaction")
	@CrossOrigin
	public ResponseEntity<Object> saveItem(@RequestBody TransactionDetails transaction) {
		transactionService.saveTransaction(transaction);
		return ResponseEntity.noContent().build();
	}
}
