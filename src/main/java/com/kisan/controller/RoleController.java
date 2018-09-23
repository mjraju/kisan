package com.kisan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kisan.model.RoleMaster;
import com.kisan.service.RoleService;

@RestController
public class RoleController {
	
	@Autowired
	RoleService roleService;
	
	@GetMapping("/Role/{roleId}")
	@CrossOrigin
	public RoleMaster getRoleDetails (@PathVariable int roleId) {
		
		return roleService.getRole(roleId);
	}
	
	@PostMapping("/SaveRole")
	@CrossOrigin
	public ResponseEntity<Object> saveRole(@RequestBody RoleMaster roleMst) {
		roleService.saveRole(roleMst);
		return ResponseEntity.noContent().build();
	}

}
