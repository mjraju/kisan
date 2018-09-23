package com.kisan.service;

import com.kisan.model.CustomerMaster;

public interface CustomerService {
	
	public void saveCustomerDetails(CustomerMaster customerMst);
	
	public CustomerMaster getCustomerDetails(int custId);

}
