package com.kisan.repository;

import org.springframework.data.repository.CrudRepository;

import com.kisan.model.SupplierMaster;

public interface SupplierMasterRepository  extends CrudRepository<SupplierMaster, Integer> {
	
	public SupplierMaster findBySupplierId(int supplierId);

}
