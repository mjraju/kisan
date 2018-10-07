package com.kisan.service;

import org.springframework.http.ResponseEntity;

import com.kisan.model.CustomerMaster;

public interface CustomerService {
	
	public void saveCustomerDetails(CustomerMaster customerMst);
	
	public CustomerMaster getCustomerDetails(int custId);

	public void deleteCustomerDetails(int custId);

}
