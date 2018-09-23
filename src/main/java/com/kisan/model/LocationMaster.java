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
public class LocationMaster {
	
	@Column (name="LOC_ID")
	@Id
	private int locId;
	
	@Column (name="LOCATION_NAME")
	private String locName;
	
	@Column (name="CREATE_DATE")
	private Date createDate;
	
	@Column (name="LOCATION_TYPE")
	private String locType;
	
	@OneToOne (cascade = CascadeType.ALL)
    @JoinColumn(name="ADDRESS_ID")
	@NotFound(action = NotFoundAction.IGNORE)
	private AddressMaster addressDetails;
	
	@OneToOne (cascade = CascadeType.ALL)
    @JoinColumn(name="REGISTRATION_ID")
	@NotFound(action = NotFoundAction.IGNORE)
	private RegistrationInfo registrationInfo;
	
	@Column (name="ACCOUNT_NUM")
	private String accountNum;
	
	@Column (name="ACCOUNT_NAME")
	private String accountName;
	
	@Column (name="BANK_NAME")
	private String bankName;
	
	@Column (name="IFSC_CODE")
	private String ifscCode;
	
	private String Description;

	public int getLocId() {
		return locId;
	}

	public void setLocId(int locId) {
		this.locId = locId;
	}

	public String getLocName() {
		return locName;
	}

	public void setLocName(String locName) {
		this.locName = locName;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public String getLocType() {
		return locType;
	}

	public void setLocType(String locType) {
		this.locType = locType;
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

	public String getAccountNum() {
		return accountNum;
	}

	public void setAccountNum(String accountNum) {
		this.accountNum = accountNum;
	}

	public String getAccountName() {
		return accountName;
	}

	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}

	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	public String getIfscCode() {
		return ifscCode;
	}

	public void setIfscCode(String ifscCode) {
		this.ifscCode = ifscCode;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}

}
