package com.kisan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kisan.model.AgentMaster;
import com.kisan.service.AgentService;

@RestController
public class AgentConroller {
	
	@Autowired
	AgentService agentService;
	
	@GetMapping("/Agents/{agentId}")
	@CrossOrigin
	public AgentMaster getAgentDetails (@PathVariable String agentId) {
		
		return agentService.getAgentDetails(Integer.parseInt(agentId));
	}
	
	@PostMapping("/SaveAgent")
	@CrossOrigin
	public ResponseEntity<Object> saveItem(@RequestBody AgentMaster agentMst) {
		agentService.saveAgentDetails(agentMst);
		return ResponseEntity.noContent().build();
	}

	
	@PostMapping("/DeleteAgents")
	@CrossOrigin
	public ResponseEntity<Object> deleteAgentDetails (@RequestBody String agentId) {
		agentService.deleteAgentDetails(Integer.parseInt(agentId));
		return ResponseEntity.noContent().build();
	}

}
