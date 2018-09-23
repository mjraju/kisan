package com.kisan.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kisan.model.RoleMaster;
import com.kisan.repository.RoleRepo;
import com.kisan.service.RoleService;

@Service
public class RoleServiceImpl implements RoleService {

	@Autowired
	private RoleRepo roleRepo;
	
	@Override
	public void saveRole(RoleMaster roleMst) {
		// TODO Auto-generated method stub
		try {
			roleRepo.save(roleMst);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	@Override
	public RoleMaster getRole(int roleId) {
		// TODO Auto-generated method stub
		try {
			return roleRepo.findByRoleId(roleId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}
