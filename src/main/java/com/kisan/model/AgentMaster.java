package com.kisan.model;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

@Entity
public class AgentMaster {
	
	@Column (name = "AGENT_ID")
	@Id
	private long agentId;
	
	@Column (name = "AGENT_NAME")
	private String agentName;
	
	@Column (name = "AGENT_TYPE")
	private String agentType;
	
	@OneToOne (cascade = CascadeType.ALL)
    @JoinColumn(name="ADDRESS_ID")
	@NotFound(action = NotFoundAction.IGNORE)
	private AddressMaster addressDetails;
	
	@OneToOne (cascade = CascadeType.ALL)
    @JoinColumn(name="REGISTRATION_ID")
	@NotFound(action = NotFoundAction.IGNORE)
	private RegistrationInfo registrationInfo;
	
	private String description;
	
	@Column (name = "CREATE_DATE")
	private Date createDate;

	public long getAgentId() {
		return agentId;
	}

	public void setAgentId(long agentId) {
		this.agentId = agentId;
	}

	public String getAgentName() {
		return agentName;
	}

	public void setAgentName(String agentName) {
		this.agentName = agentName;
	}

	public String getAgentType() {
		return agentType;
	}

	public void setAgentType(String agentType) {
		this.agentType = agentType;
	}

	public AddressMaster getAddressDetails() {
		return addressDetails;
	}

	public void setAddressDetails(AddressMaster addressDetails) {
		this.addressDetails = addressDetails;
	}

	public RegistrationInfo getRegistrationInfo() {
		return registrationInfo;
	}

	public void setRegistrationInfo(RegistrationInfo registrationInfo) {
		this.registrationInfo = registrationInfo;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}
}
