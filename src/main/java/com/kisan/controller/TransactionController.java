package com.kisan.controller;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.kisan.model.TransactionDetails;
import com.kisan.service.TransactionService;

import java.math.BigInteger;

@RestController
@CrossOrigin
public class TransactionController {

	Logger logger = Logger.getLogger(TransactionController.class);
	@Autowired
	TransactionService transactionService;

	@PostMapping("/SaveTransaction")
	@CrossOrigin
	public ResponseEntity<Object> saveItem(@RequestBody TransactionDetails transaction) {
		transactionService.saveTransaction(transaction);
		return ResponseEntity.noContent().build();
	}
	
	@GetMapping("/Transaction/{barCode}")
	@CrossOrigin
	public TransactionDetails getTransaction(@PathVariable("barCode") String barCode){
		TransactionDetails transaction = new TransactionDetails();
		try{
		//	BigInteger transId = new BigInteger(barCode);
			logger.info("Barcode  :"+barCode);
			transaction = transactionService.getTransaction(Integer.parseInt(barCode));
		}catch(Exception e){
			logger.error("Exception in Get transaction "+e.getMessage());
		}
		return transaction;
	}
	
	@PostMapping("/EditTransaction")
	@CrossOrigin
	public ResponseEntity<Object> editItem(@RequestBody TransactionDetails transaction) {
		transactionService.saveTransaction(transaction);
		return ResponseEntity.noContent().build();
	}
	
	
	@PostMapping("/DeleteTransaction")
	@CrossOrigin
	public ResponseEntity<Object> deleteItem(@RequestBody String barCode ) {
		transactionService.deleteTransaction(Integer.parseInt(barCode));
		return ResponseEntity.noContent().build();
	}
}
