package com.kisan.repository;

import org.springframework.data.repository.CrudRepository;

import com.kisan.model.LocationMaster;

public interface LocationRepo extends CrudRepository<LocationMaster, Integer> {
	
	public LocationMaster findByLocId(int locId);

}
