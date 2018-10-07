package com.kisan.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kisan.model.AgentMaster;
import com.kisan.repository.AgentRepo;
import com.kisan.service.AgentService;

@Service
public class AgentServiceImpl implements AgentService {
	
	@Autowired
	private AgentRepo agentRepo;

	@Override
	public void saveAgentDetails(AgentMaster agentMst) {
		// TODO Auto-generated method stub
		try {
			agentRepo.save(agentMst);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	@Override
	public AgentMaster getAgentDetails(int agentId) {
		// TODO Auto-generated method stub
		try {
			return agentRepo.findByAgentId(agentId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	@Override
	public void deleteAgentDetails(int agentId) {
		// TODO Auto-generated method stub
		try {
			agentRepo.delete(agentId);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
