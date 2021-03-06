package com.kisan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kisan.model.LocationMaster;
import com.kisan.service.LocationService;

@RestController
public class LocationController {
	
	@Autowired
	private LocationService locService;
	
	@GetMapping("/Locations/{locId}")
	@CrossOrigin
	public LocationMaster getAgentDetails (@PathVariable String locId) {
		
		return locService.getLocationDetails(Integer.parseInt(locId));
	}
	
	@PostMapping("/SaveLocation")
	@CrossOrigin
	public ResponseEntity<Object> saveItem(@RequestBody LocationMaster locationMst) {
		locService.saveLocationDetails(locationMst);
		return ResponseEntity.noContent().build();
	}
	
	@PostMapping("/DeleteLocations")
	@CrossOrigin
	public ResponseEntity<Object> deleteLocationDetails (@RequestBody String locId) {
		
	    locService.deleteLocationDetails(Integer.parseInt(locId));
		return ResponseEntity.noContent().build();
	}

}
