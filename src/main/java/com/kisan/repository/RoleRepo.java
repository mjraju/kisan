package com.kisan.repository;

import org.springframework.data.repository.CrudRepository;

import com.kisan.model.RoleMaster;

public interface RoleRepo extends CrudRepository<RoleMaster,Integer>{
	
	public RoleMaster findByRoleId(int roleId);

}
