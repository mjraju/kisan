package com.kisan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kisan.model.FarmerMaster;
import com.kisan.service.FarmerService;

@RestController
@CrossOrigin
public class FarmerMasterConroller {
	
	@Autowired
	FarmerService farmerService;
	
	@GetMapping("/Farmers/{farmerId}")
	@CrossOrigin
	public FarmerMaster getItemDetails (@PathVariable int farmerId) {
		
		return farmerService.getFarmerDetails(farmerId);
	}
	
	@PostMapping("/SaveFarmer")
	@CrossOrigin
	public ResponseEntity<Object> saveItem(@RequestBody FarmerMaster farmerMst) {
		farmerService.saveFarmerDetails(farmerMst);
		return ResponseEntity.noContent().build();
	}

	
	@GetMapping("/Farmers/{farmerId}")
	@CrossOrigin
	public ResponseEntity<Object> deleteItemDetails (@PathVariable int farmerId) {
		
		 farmerService.deleteFarmerDetails(farmerId);
		 return ResponseEntity.noContent().build();
	}
}
