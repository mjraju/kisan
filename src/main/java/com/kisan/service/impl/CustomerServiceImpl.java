package com.kisan.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kisan.model.CustomerMaster;
import com.kisan.repository.CustomerRepo;
import com.kisan.service.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerRepo custRepo;

	@Override
	public void saveCustomerDetails(CustomerMaster customerMst) {
		// TODO Auto-generated method stub
		try {
			custRepo.save(customerMst);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	@Override
	public CustomerMaster getCustomerDetails(int custId) {
		try {
			return custRepo.findByCustId(custId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}
