package com.kisan.service;

import com.kisan.model.UserMaster;

public interface UserService {
	
	public void saveUser(UserMaster userMst);
	
	public UserMaster getUserDetails(String userId);

}
