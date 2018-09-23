package com.kisan.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

@Entity
@Table(name="SUPPLIER_MASTER",schema="test")
public class SupplierMaster {
	
	@Column(name =  "SUPPLIER_ID")
	@Id
	private int supplierId;
	
	@Column(name =  "SUPPLIER_NAME")
	private String supplierName;
	
	@Column(name =  "SUPPLIER_TYPE")
	private String supplierType;
	
//	@Column(name =  "ADDRESS_ID")
//	private int addresId;
	
//	@Column(name =  "DELIVERY_ADD_ID")
//	private String deliveryAddressId;
	
	@Column(name =  "USER_ID")
	private String userId;
	
	private String vehicle;
	
//	@Column(name =  "REGISTRATION_ID")
//	private int registrationId;
	
	@OneToOne (cascade = CascadeType.ALL)
    @JoinColumn(name="ADDRESS_ID")
	@NotFound(action = NotFoundAction.IGNORE)
	private AddressMaster addressDetails;
	
	@OneToOne (cascade = CascadeType.ALL)
    @JoinColumn(name="DELIVERY_ADD_ID")
	@NotFound(action = NotFoundAction.IGNORE)
	private AddressMaster deliveryaddressDetails;
	
	@OneToOne (cascade = CascadeType.ALL)
    @JoinColumn(name="REGISTRATION_ID")
	@NotFound(action = NotFoundAction.IGNORE)
	private RegistrationInfo registrationInfo;

	public int getSupplierId() {
		return supplierId;
	}

	public void setSupplierId(int supplierId) {
		this.supplierId = supplierId;
	}

	public String getSupplierName() {
		return supplierName;
	}

	public AddressMaster getDeliveryaddressDetails() {
		return deliveryaddressDetails;
	}

	public void setDeliveryaddressDetails(AddressMaster deliveryaddressDetails) {
		this.deliveryaddressDetails = deliveryaddressDetails;
	}

	public void setSupplierName(String supplierName) {
		this.supplierName = supplierName;
	}

	public String getSupplierType() {
		return supplierType;
	}

	public void setSupplierType(String supplierType) {
		this.supplierType = supplierType;
	}

//	public int getAddresId() {
//		return addresId;
//	}
//
//	public void setAddresId(int addresId) {
//		this.addresId = addresId;
//	}

//	public String getDeliveryAddressId() {
//		return deliveryAddressId;
//	}
//
//	public void setDeliveryAddressId(String deliveryAddressId) {
//		this.deliveryAddressId = deliveryAddressId;
//	}

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

//	public int getRegistrationId() {
//		return registrationId;
//	}
//
//	public void setRegistrationId(int registrationId) {
//		this.registrationId = registrationId;
//	}

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
}
