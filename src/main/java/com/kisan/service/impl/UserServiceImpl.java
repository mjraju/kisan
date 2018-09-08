package com.kisan.service.impl;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kisan.model.UserMaster;
import com.kisan.repository.UserMasterRepository;
import com.kisan.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserMasterRepository userMstRepo;

	@Override
	public void saveUser(UserMaster userMst) {
		try {
			if (userMst != null) {
				userMst.setCreationDate(new Date(System.currentTimeMillis()));
				System.out.println(userMst.getUserId());
				userMstRepo.save(userMst);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	@Override
	public UserMaster getUserDetails(String userId) {
		// TODO Auto-generated method stub
		return null;
	}

}
