package com.kisan.service;

import java.util.List;

import com.kisan.model.ItemMaster;

public interface ItemService {
	
	public void saveItem(ItemMaster itemMst);
	
	public ItemMaster getItemDetails(int itemId);
	
	public List<ItemMaster> getItemsList();

}
