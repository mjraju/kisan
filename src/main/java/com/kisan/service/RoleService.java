package com.kisan.service;

import com.kisan.model.RoleMaster;

public interface RoleService {
	
	public void saveRole(RoleMaster roleMst);
	
	public RoleMaster getRole(int roleId);

}
