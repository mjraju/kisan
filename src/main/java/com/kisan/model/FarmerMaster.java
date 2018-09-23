package com.kisan.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="farmer_master",schema="test")
public class FarmerMaster {
	
	@Column(name =  "farmer_id")
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int farmerId;
	
	@Column(name =  "farmer_name")
	private String farmerName;
	
	@Column(name =  "village")
	private String village;
	
	@Column(name =  "age")
	private int age;
	
	@Column(name =  "mandal")
	private String mandal;
	
	@Column(name =  "gender")
	private String gender;
	
	@Column(name =  "survey_num")
	private String surveyNum;
	
	@Column(name =  "NUM_ACRES")
	private int noOfAcres;
	
	@Column(name =  "OWN_LAND")
	private String ownLand;//Y or N type
	
	@Column(name =  "AADHAR")
	private long aadharNum;
	
	@Column(name =  "PAN")
	private String pan;
	
	@Column(name =  "ACCOUNT_NUM")
	private String accountNum;
	
	@Column(name =  "BANK_NAME")
	private String bankName;
	
	@Column(name =  "IFSC_CODE")
	private String ifscCode;
	
	@Column(name =  "CULTIVABLE_PRODS")
	private String cultivableProds;
			
	public int getFarmerId() {
		return farmerId;
	}

	public void setFarmerId(int farmerId) {
		this.farmerId = farmerId;
	}

	public String getFarmerName() {
		return farmerName;
	}

	public void setFarmerName(String farmerName) {
		this.farmerName = farmerName;
	}

	public String getVillage() {
		return village;
	}

	public void setVillage(String village) {
		this.village = village;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getMandal() {
		return mandal;
	}

	public void setMandal(String mandal) {
		this.mandal = mandal;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getSurveyNum() {
		return surveyNum;
	}

	public void setSurveyNum(String surveyNum) {
		this.surveyNum = surveyNum;
	}

	public int getNoOfAcres() {
		return noOfAcres;
	}

	public void setNoOfAcres(int noOfAcres) {
		this.noOfAcres = noOfAcres;
	}

	public String getOwnLand() {
		return ownLand;
	}

	public void setOwnLand(String ownLand) {
		this.ownLand = ownLand;
	}

	public long getAadharNum() {
		return aadharNum;
	}

	public void setAadharNum(long aadharNum) {
		this.aadharNum = aadharNum;
	}

	public String getPan() {
		return pan;
	}

	public void setPan(String pan) {
		this.pan = pan;
	}

	public String getAccountNum() {
		return accountNum;
	}

	public void setAccountNum(String accountNum) {
		this.accountNum = accountNum;
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
	

	public String getCultivableProds() {
		return cultivableProds;
	}

	public void setCultivableProds(String cultivableProds) {
		this.cultivableProds = cultivableProds;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	@Column(name =  "create_date")
	private Date createDate;

}
