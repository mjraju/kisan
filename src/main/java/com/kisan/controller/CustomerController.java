package com.kisan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kisan.model.CustomerMaster;
import com.kisan.service.CustomerService;

@RestController
public class CustomerController {
	
	@Autowired
	CustomerService customerService;
	
	@GetMapping("/Customers/{custId}")
	@CrossOrigin
	public CustomerMaster getItemDetails (@PathVariable int custId) {
		
		return customerService.getCustomerDetails(custId);
	}
	
	@PostMapping("/SaveCustomer")
	@CrossOrigin
	public ResponseEntity<Object> saveItem(@RequestBody CustomerMaster customerMst) {
		customerService.saveCustomerDetails(customerMst);
		return ResponseEntity.noContent().build();
	}

}