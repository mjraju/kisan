package com.kisan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kisan.model.ItemMaster;
import com.kisan.service.ItemService;

@RestController
@CrossOrigin
public class ItemMasterController {
	
	@Autowired
	ItemService itemService;
	
	@GetMapping("/Items/{itemId}")
	@CrossOrigin
	public ItemMaster getItemDetails (@PathVariable String itemId) {
		
		return itemService.getItemDetails(Integer.parseInt(itemId));
	}
	
	@GetMapping("/getItemsList")
	@CrossOrigin
	public List<ItemMaster> getItemsList() {
		return itemService.getItemsList();
	}
	
	@PostMapping("/Saveitem")
	@CrossOrigin
	public ResponseEntity<Object> saveItem(@RequestBody ItemMaster itemObject) {
		itemService.saveItem(itemObject);
		return ResponseEntity.noContent().build();
	}
	
	
	@PostMapping("/DeleteItems")
	@CrossOrigin
	public ResponseEntity<Object> deleteItemDetails (@RequestBody String itemId) {
		
		itemService.deleteItemDetails(Integer.parseInt(itemId));
		return ResponseEntity.noContent().build();
	}


}
