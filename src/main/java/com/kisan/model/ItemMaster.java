package com.kisan.model;

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
