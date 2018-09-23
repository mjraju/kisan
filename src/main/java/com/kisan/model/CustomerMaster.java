package com.kisan.model;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

@Entity
@Table(name="CUSTOMER_MASTER",schema="test")
public class CustomerMaster {
	
	@Column(name =  "CUST_ID")
	@Id
	private int custId;
	
	@Column(name =  "CUST_NAME")
	private String custName;
	
	@Column(name =  "CUST_TYPE")
	private String custType;
	
	@Column(name = "USER_ID")
	private String userId;
	
	private String vehicle;
	
	private Date dob;
	
	private String gender;
	
	@Column(name = "MARITAL_STATUS")
	private String maritalStatus;
	
	@Column(name = "CREATE_DATE")
	private Date createDate;
	
	@OneToOne (cascade = CascadeType.ALL)
    @JoinColumn(name="ADDRESS_ID")
	@NotFound(action = NotFoundAction.IGNORE)
	private AddressMaster deliveryaddressDetails;
	
	public int getCustId() {
		return custId;
	}

	public void setCustId(int custId) {
		this.custId = custId;
	}

	public String getCustName() {
		return custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}

	public String getCustType() {
		return custType;
	}

	public void setCustType(String custType) {
		this.custType = custType;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getVehicle() {
		return vehicle;
	}

	public void setVehicle(String vehicle) {
		this.vehicle = vehicle;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getMaritalStatus() {
		return maritalStatus;
	}

	public void setMaritalStatus(String maritalStatus) {
		this.maritalStatus = maritalStatus;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public AddressMaster getDeliveryaddressDetails() {
		return deliveryaddressDetails;
	}

	public void setDeliveryaddressDetails(AddressMaster deliveryaddressDetails) {
		this.deliveryaddressDetails = deliveryaddressDetails;
	}

	public RegistrationInfo getRegistrationInfo() {
		return registrationInfo;
	}

	public void setRegistrationInfo(RegistrationInfo registrationInfo) {
		this.registrationInfo = registrationInfo;
	}

	@OneToOne (cascade = CascadeType.ALL)
    @JoinColumn(name="REGISTRATION_ID")
	@NotFound(action = NotFoundAction.IGNORE)
	private RegistrationInfo registrationInfo;
}
