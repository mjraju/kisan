package com.kisan.service;

import com.kisan.model.SupplierMaster;

public interface SupplierService {
	
	public void saveSupplierDetails(SupplierMaster supplierMst);
	
	public SupplierMaster getSupplierDetails(int supplierId);
	
	public void deleteSupplierDetails(int supplierId);

}
