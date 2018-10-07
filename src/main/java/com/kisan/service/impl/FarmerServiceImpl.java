package com.kisan.service.impl;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kisan.model.FarmerMaster;
import com.kisan.repository.FarmerMasterRepository;
import com.kisan.service.FarmerService;

@Service
public class FarmerServiceImpl implements FarmerService {
	
	@Autowired
	FarmerMasterRepository farmerRepo;

	@Override
	public void saveFarmerDetails(FarmerMaster farmerMst) {
		try {
			if(farmerMst != null) {
				farmerMst.setCreateDate(new Date(System.currentTimeMillis()));
				System.out.println("name=="+farmerMst.getBankName());
				System.out.println("cult prods=="+farmerMst.getCultivableProds());
				farmerRepo.save(farmerMst);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	@Override
	public FarmerMaster getFarmerDetails(int farmerId) {
		try {
			return farmerRepo.findByFarmerId(farmerId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	
	@Override
	public void deleteFarmerDetails(int farmerId) {
		try {
				farmerRepo.delete(farmerId);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
