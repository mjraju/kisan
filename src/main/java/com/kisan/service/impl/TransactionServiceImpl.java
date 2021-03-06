package com.kisan.service.impl;

import com.kisan.model.TransactionDetails;
import com.kisan.repository.TransactionDetailsRepository;
import com.kisan.service.TransactionService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.sql.Date;

@Service
public class TransactionServiceImpl implements TransactionService {
    Logger logger = Logger.getLogger(TransactionServiceImpl.class);
    @Autowired
    private TransactionDetailsRepository transactionRepo;

    @Override
    public void saveTransaction(TransactionDetails transaction) {
        try {
            if (transaction != null) {
                transaction.setCreate_date(new Date(System.currentTimeMillis()));
                transactionRepo.save(transaction);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public TransactionDetails getTransaction(int barCode) {
        TransactionDetails transaction = new TransactionDetails();
        try {
            transaction =  transactionRepo.findByTransId(barCode);
            logger.info("Transaction details are "+transaction);
            logger.info("Selling date value is"+ transaction.getSelling_date());
            logger.info("Storage date value is"+ transaction.getStorage_date());
        } catch (Exception e) {
            logger.error(e.getStackTrace());
        }
        return transaction;
    }
    
    
    @Override
    public void deleteTransaction(int transaction) {
        try {
                transactionRepo.delete(transaction);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
