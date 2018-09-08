package com.kisan.controller;

import org.springframework.beans.factory.annotation.Autowired;
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
	
	@GetMapping("/Authenticate/{userId}/{pwd}")
	@CrossOrigin
	public String authenticateUser (@PathVariable String userId,
			@PathVariable String pwd) {
		
		return AuthService.AuthenticateUser(userId, pwd);
	}
	
	@PostMapping("/Saveuser")
	@CrossOrigin
	public ResponseEntity<Object> saveUser(@RequestBody UserMaster userObject) {
		userService.saveUser(userObject);
		return ResponseEntity.noContent().build();
	}

}
