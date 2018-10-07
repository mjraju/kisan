package com.kisan.service;

import com.kisan.model.AgentMaster;

public interface AgentService {

	public void saveAgentDetails(AgentMaster agentMst);
	
	public AgentMaster getAgentDetails(int agentId);

	public void deleteAgentDetails(int agentId);
}
