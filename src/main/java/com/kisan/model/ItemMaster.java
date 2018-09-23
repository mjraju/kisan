package com.kisan.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="item_master", schema="test")
public class ItemMaster {

	@Column(name = "item_id")
	@Id
	private int itemId;

	private String item_name;

	private String item_type;

	private String item_desc;

	private String item_localname;
	
	private float rate;
	
	private String unit;
	
	private float mrp;
	
	private float discount_rate;
	
	private Date effective_from;
	
	private String brand;
	
	
	public int getItemId() {
		return itemId;
	}

	public void setItemId(int itemId) {
		this.itemId = itemId;
	}

	public float getRate() {
		return rate;
	}

	public void setRate(float rate) {
		this.rate = rate;
	}

	public String getUnit() {
		return unit;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}

	public float getMrp() {
		return mrp;
	}

	public void setMrp(float mrp) {
		this.mrp = mrp;
	}

	public float getDiscount_rate() {
		return discount_rate;
	}

	public void setDiscount_rate(float discount_rate) {
		this.discount_rate = discount_rate;
	}

	public Date getEffective_from() {
		return effective_from;
	}

	public void setEffective_from(Date effective_from) {
		this.effective_from = effective_from;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public int getItem_id() {
		return itemId;
	}

	public void setItem_id(int item_id) {
		this.itemId = item_id;
	}

	public String getItem_name() {
		return item_name;
	}

	public void setItem_name(String item_name) {
		this.item_name = item_name;
	}

	public String getItem_type() {
		return item_type;
	}

	public void setItem_type(String item_type) {
		this.item_type = item_type;
	}

	public String getItem_desc() {
		return item_desc;
	}

	public void setItem_desc(String item_desc) {
		this.item_desc = item_desc;
	}

	public String getItem_localname() {
		return item_localname;
	}

	public void setItem_localname(String item_localname) {
		this.item_localname = item_localname;
	}
}
