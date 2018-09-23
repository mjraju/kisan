package com.kisan.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kisan.model.LocationMaster;
import com.kisan.repository.LocationRepo;
import com.kisan.service.LocationService;

@Service
public class LocationServiceImpl implements LocationService {
	
	@Autowired
	private LocationRepo locationRepo;

	@Override
	public void saveLocationDetails(LocationMaster locationMst) {
		// TODO Auto-generated method stub
		try {
			locationRepo.save(locationMst);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	@Override
	public LocationMaster getLocationDetails(int locId) {
		// TODO Auto-generated method stub
		try {
			return locationRepo.findByLocId(locId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}
