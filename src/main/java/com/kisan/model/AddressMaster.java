package com.kisan.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ADDRESS_MASTER",schema="test")
public class AddressMaster {
	
	@Column(name =  "ADDRESS_ID")
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int addressId;
	
	@Column(name =  "ADDRESS_LINE1")
	private String addressLine1;
	
	@Column(name =  "ADDRESS_LINE2")
	private String addressLine2;
	
	@Column(name =  "ADDRESS_LINE3")
	private String addressLine3;
	
	private String city;
	
	private String state;
	
	private int pin;
	
	private String email;
	
	@Column(name =  "MOBILE_NO")
	private long mobileNum;
	
	@Column(name =  "ALT_MOBILE")
	private long altMobileNum;
	
	@Column(name =  "RESIDENTIAL_NO")
	private long residencePhNum;
	
	@Column(name =  "OFFICE_NO")
	private long officePhNum;
	
	//if B then billing address, S then shipping address etc..
	@Column(name =  "ADDRESS_TYPE")
	private String addressType;
	
	private Date create_date;

	public int getAddressId() {
		return addressId;
	}

	public void setAddressId(int addressId) {
		this.addressId = addressId;
	}

	public String getAddressLine1() {
		return addressLine1;
	}

	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}

	public String getAddressLine2() {
		return addressLine2;
	}

	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
	}

	public String getAddressLine3() {
		return addressLine3;
	}

	public void setAddressLine3(String addressLine3) {
		this.addressLine3 = addressLine3;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getPin() {
		return pin;
	}

	public void setPin(int pin) {
		this.pin = pin;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getMobileNum() {
		return mobileNum;
	}

	public void setMobileNum(long mobileNum) {
		this.mobileNum = mobileNum;
	}

	public long getAltMobileNum() {
		return altMobileNum;
	}

	public void setAltMobileNum(long altMobileNum) {
		this.altMobileNum = altMobileNum;
	}

	public long getResidencePhNum() {
		return residencePhNum;
	}

	public void setResidencePhNum(long residencePhNum) {
		this.residencePhNum = residencePhNum;
	}

	public long getOfficePhNum() {
		return officePhNum;
	}

	public void setOfficePhNum(long officePhNum) {
		this.officePhNum = officePhNum;
	}

	public String getAddressType() {
		return addressType;
	}

	public void setAddressType(String addressType) {
		this.addressType = addressType;
	}

	public Date getCreate_date() {
		return create_date;
	}

	public void setCreate_date(Date create_date) {
		this.create_date = create_date;
	}
}
