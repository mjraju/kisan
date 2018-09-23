package com.kisan.service;

import com.kisan.model.LoginRequest;
import com.kisan.model.LoginResponse;

public interface AuthenticationService {
	
	public LoginResponse AuthenticateUser(LoginRequest loginRequest);

}
