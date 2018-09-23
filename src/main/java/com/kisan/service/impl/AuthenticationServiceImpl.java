package com.kisan.service.impl;

import com.kisan.model.LoginRequest;
import com.kisan.model.LoginResponse;
import com.kisan.utils.ApplicationConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kisan.model.UserMaster;
import com.kisan.repository.UserMasterRepository;
import com.kisan.service.AuthenticationService;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {
	
	@Autowired
	private UserMasterRepository userMasterRepo;

	public LoginResponse AuthenticateUser(LoginRequest loginRequest) {
		String userRole = null;
		UserMaster userMstObj = null;
		LoginResponse loginResponse = new LoginResponse();
		try {
			if (loginRequest.getUserId()!= null && loginRequest.getPassword() != null) {
				loginResponse.setUserId(loginRequest.getUserId());
				userMstObj = userMasterRepo.findByUserId(loginRequest.getUserId());
				
				if (userMstObj != null) {
					if (loginRequest.getPassword().equals(userMstObj.getPassword())){
						loginResponse.setCode(ApplicationConstants.SUCCESS_CODE);
						loginResponse.setUserRole(userMstObj.getUserRole());
					}
					else
						userRole = "invalid password";
				}else {
					loginResponse.setCode(ApplicationConstants.ERROR_CODE);
					loginResponse.setStatusMessage("User Not Found");
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return loginResponse;
	}

}
