package com.kisan.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.kisan.model.ItemMaster;

public interface ItemMasterRepository extends CrudRepository<ItemMaster, Integer> {
	
	ItemMaster findByItemId(int itemId);
	List<ItemMaster> findAll();

}
