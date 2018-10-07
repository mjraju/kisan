package com.kisan.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kisan.model.ItemMaster;
import com.kisan.repository.ItemMasterRepository;
import com.kisan.service.ItemService;

@Service
public class ItemServiceImpl implements ItemService {
	
	@Autowired
	ItemMasterRepository itemRepo;

	@Override
	public void saveItem(ItemMaster itemMst) {
		try {
			if(itemMst != null) {
				itemRepo.save(itemMst);
			}
			
		} catch (Exception e) {
			// TODO: handle exception
		}
	}

	@Override
	public ItemMaster getItemDetails(int itemId) {
		try {
			if (itemId != 0) {
				return itemRepo.findByItemId(itemId);
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
		return null;
	}
	
	@Override
	public List<ItemMaster> getItemsList() {
		try {
				return itemRepo.findAll();
		} catch (Exception e) {
			// TODO: handle exception
		}
		return null;
	}
	
	
	@Override
	public void deleteItemDetails(int itemId) {
		try {
				itemRepo.delete(itemId);
			
		} catch (Exception e) {
			// TODO: handle exception
		}
	}

}
