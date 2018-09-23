package com.kisan.repository;

import org.springframework.data.repository.CrudRepository;

import com.kisan.model.AgentMaster;

public interface AgentRepo extends CrudRepository<AgentMaster, Integer> {
	
	public AgentMaster findByAgentId(int agentId);

}
