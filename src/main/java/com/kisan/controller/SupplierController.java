package com.kisan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kisan.model.SupplierMaster;
import com.kisan.service.SupplierService;

@RestController
public class SupplierController {
	
	@Autowired
	SupplierService supplierService;
	
	@GetMapping("/Suppliers/{supplierId}")
	@CrossOrigin
	public SupplierMaster getItemDetails (@PathVariable int supplierId) {
		
		return supplierService.getSupplierDetails(supplierId);
	}
	
	@PostMapping("/SaveSupplier")
	@CrossOrigin
	public ResponseEntity<Object> saveItem(@RequestBody SupplierMaster supplierMst) {
		supplierService.saveSupplierDetails(supplierMst);
		return ResponseEntity.noContent().build();
	}

}