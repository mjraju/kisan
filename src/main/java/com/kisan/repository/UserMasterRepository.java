package com.kisan.repository;

import org.springframework.data.repository.CrudRepository;

import com.kisan.model.UserMaster;

public interface UserMasterRepository extends CrudRepository<UserMaster, String> {

	UserMaster findByUserId(String userId);
	
}
