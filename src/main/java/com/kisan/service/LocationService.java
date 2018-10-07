package com.kisan.service;

import com.kisan.model.LocationMaster;

public interface LocationService {
	
	public void saveLocationDetails(LocationMaster locationMst);
	
	public LocationMaster getLocationDetails(int locId);

	public void deleteLocationDetails(int locId);

}
