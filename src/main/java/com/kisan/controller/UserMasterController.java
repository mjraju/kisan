package com.kisan.controller;

import com.kisan.model.LoginRequest;
import com.kisan.model.LoginResponse;
import com.kisan.model.SupplierMaster;
import com.kisan.utils.ApplicationConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kisan.model.UserMaster;
import com.kisan.service.AuthenticationService;
import com.kisan.service.UserService;

@RestController
@CrossOrigin
public class UserMasterController {
	
	@Autowired
	AuthenticationService AuthService;
	
	@Autowired
	UserService userService;
	
	@PostMapping("/Authenticate")
	@CrossOrigin
	public ResponseEntity<LoginResponse> authenticateUser (@RequestBody LoginRequest loginRequest) {
		LoginResponse loginResponse = new LoginResponse();
		loginResponse = AuthService.AuthenticateUser(loginRequest);
		if(loginResponse.getCode() == ApplicationConstants.SUCCESS_CODE){
			return new ResponseEntity<>(loginResponse,HttpStatus.ACCEPTED);
		}else{
			return new ResponseEntity<>(loginResponse,HttpStatus.BAD_REQUEST);
		}

	}
	
	@GetMapping("/GetUser/{userId}")
	@CrossOrigin
	public UserMaster getItemDetails (@PathVariable String userId) {
		
		return userService.getUserDetails(userId);
	}
	
	@PostMapping("/Saveuser")
	@CrossOrigin
	public ResponseEntity<Object> saveUser(@RequestBody UserMaster userObject) {
		userService.saveUser(userObject);
		return ResponseEntity.noContent().build();
	}
	
	
	@PostMapping("/DeleteUser")
	@CrossOrigin
	public ResponseEntity<Object> deleteUser(@RequestBody String userId) {
		userService.deleteUser(userId);
		return ResponseEntity.noContent().build();
	}

}
