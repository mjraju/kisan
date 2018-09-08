package com.kisan.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kisan.model.UserMaster;
import com.kisan.repository.UserMasterRepository;
import com.kisan.service.AuthenticationService;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {
	
	@Autowired
	private UserMasterRepository userMasterRepo;

	public String AuthenticateUser(String userID,String pwd) {
		String userRole = null;
		UserMaster userMstObj = null;
		try {
			if (userID != null && pwd != null) {
				userMstObj = userMasterRepo.findByUserId(userID);
				
				if (userMstObj != null) {
					if (pwd.equals(userMstObj.getPassword()))
							userRole = userMstObj.getUserRole();
					else
						userRole = "invalid password";
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return userRole;
	}

}
