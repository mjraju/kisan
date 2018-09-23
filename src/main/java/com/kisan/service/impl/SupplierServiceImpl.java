package com.kisan.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kisan.model.SupplierMaster;
import com.kisan.repository.SupplierMasterRepository;
import com.kisan.service.SupplierService;

@Service
public class SupplierServiceImpl implements SupplierService {
	
	@Autowired
	private SupplierMasterRepository supplierRepo;

	@Override
	public void saveSupplierDetails(SupplierMaster supplierMst) {
		// TODO Auto-generated method stub
		try {
			supplierRepo.save(supplierMst);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public SupplierMaster getSupplierDetails(int supplierId) {
		try {
			return supplierRepo.findBySupplierId(supplierId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}
