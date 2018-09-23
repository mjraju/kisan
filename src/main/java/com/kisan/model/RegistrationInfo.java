package com.kisan.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="REGISTRATION_INFO",schema="test")
public class RegistrationInfo {
	
	@Column(name =  "REGISTRATION_ID")
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int regristrationId;
	
	private String pan;
	
	private String tin;
	
	private String gst;
	
	private String cst;
	
	@Column(name =  "LICENCE_NUM")
	private String licenceNum;
	
	@Column(name =  "CE_NUM")
	private String ceNum;
	
	@Column(name =  "CE_DIVISION")
	private String ceDivison;
	
	@Column(name =  "CREATE_DATE")
	private Date createDate;

	public int getRegristrationId() {
		return regristrationId;
	}

	public void setRegristrationId(int regristrationId) {
		this.regristrationId = regristrationId;
	}

	public String getPan() {
		return pan;
	}

	public void setPan(String pan) {
		this.pan = pan;
	}

	public String getTin() {
		return tin;
	}

	public void setTin(String tin) {
		this.tin = tin;
	}

	public String getGst() {
		return gst;
	}

	public void setGst(String gst) {
		this.gst = gst;
	}

	public String getCst() {
		return cst;
	}

	public void setCst(String cst) {
		this.cst = cst;
	}

	public String getLicenceNum() {
		return licenceNum;
	}

	public void setLicenceNum(String licenceNum) {
		this.licenceNum = licenceNum;
	}

	public String getCeNum() {
		return ceNum;
	}

	public void setCeNum(String ceNum) {
		this.ceNum = ceNum;
	}

	public String getCeDivison() {
		return ceDivison;
	}

	public void setCeDivison(String ceDivison) {
		this.ceDivison = ceDivison;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}
}
