package com.kisan.service;

import com.kisan.model.FarmerMaster;

public interface FarmerService {

	public void saveFarmerDetails(FarmerMaster farmerMst);
	
	public FarmerMaster getFarmerDetails(int farmerId);
}
