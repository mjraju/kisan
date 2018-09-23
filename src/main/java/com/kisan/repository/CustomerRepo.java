package com.kisan.repository;

import org.springframework.data.repository.CrudRepository;

import com.kisan.model.CustomerMaster;

public interface CustomerRepo extends CrudRepository<CustomerMaster, Integer> {

	public CustomerMaster findByCustId(int custId);
	
}
