package com.kisan.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="transaction_details",schema="test")
public class TransactionDetails {
	@Column(name="trans_id")
	@Id
	private int transId;
	private int farmer_id;
	private int item_id;
	private String source_location;
	private Date create_date;
	private float qantity;
	private String grade;
	private String status;
	private String storage_loc;
	private Date storage_date;
	private float price;
	private String selling_loc;
	private Date selling_date;

	public int getTransId() {
		return transId;
	}
	public void setTransId(int transId) {
		this.transId = transId;
	}
	public int getFarmer_id() {
		return farmer_id;
	}
	public void setFarmer_id(int farmer_id) {
		this.farmer_id = farmer_id;
	}
	public int getItem_id() {
		return item_id;
	}
	public void setItem_id(int item_id) {
		this.item_id = item_id;
	}
	public String getSource_location() {
		return source_location;
	}
	public void setSource_location(String source_location) {
		this.source_location = source_location;
	}
	public Date getCreate_date() {
		return create_date;
	}
	public void setCreate_date(Date create_date) {
		this.create_date = create_date;
	}
	
	public float getQantity() {
		return qantity;
	}
	public void setQantity(float qantity) {
		this.qantity = qantity;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getStorage_loc() {
		return storage_loc;
	}
	public void setStorage_loc(String storage_loc) {
		this.storage_loc = storage_loc;
	}
	public Date getStorage_date() {
		return storage_date;
	}
	public void setStorage_date(Date storage_date) {
		this.storage_date = storage_date;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public String getSelling_loc() {
		return selling_loc;
	}
	public void setSelling_loc(String selling_loc) {
		this.selling_loc = selling_loc;
	}
	public Date getSelling_date() {
		return selling_date;
	}
	public void setSelling_date(Date selling_date) {
		this.selling_date = selling_date;
	}



}
