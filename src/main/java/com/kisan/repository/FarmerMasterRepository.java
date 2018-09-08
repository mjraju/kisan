package com.kisan.repository;

import org.springframework.data.repository.CrudRepository;

import com.kisan.model.FarmerMaster;

public interface FarmerMasterRepository  extends CrudRepository<FarmerMaster, Integer>  {
	
	public FarmerMaster findByFarmerId(int farmerId);

}
