package com.kisan.service;

import com.kisan.model.TransactionDetails;

import java.math.BigInteger;

public interface TransactionService {
	public void saveTransaction(TransactionDetails transaction);
	public TransactionDetails getTransaction(int barcode);
	public void deleteTransaction(int barCode);
}
