package com.skilldistillery.rentals.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.rentals.entities.PropertyType;
import com.skilldistillery.rentals.services.PropertyTypeService;

@RestController
@RequestMapping("api")
public class PropertyTypeController {
	
	@Autowired
	private PropertyTypeService propTypeSvc;
	
	
	@GetMapping("types")
	public List<PropertyType> gtAllPropetyType(){
		
		return propTypeSvc.index();
		
	}
	
	
	@GetMapping("types/{pid}")
	public PropertyType getPropTypeForProperty(@PathVariable int pid) {
		
		return propTypeSvc.findPropertyTypeById(pid);
		
	}
	
	@PostMapping("types")
	public PropertyType createPropertyType(@RequestBody PropertyType prop, HttpServletResponse res) {
		
		if(prop != null) {
			
			propTypeSvc.createPropertyType(prop);
			res.setStatus(201);
			return prop;
		} else {
			
			res.setStatus(404);
			return null;
		}
		
		
		
	}
	
	
	
	@PutMapping("types/{id}")
	public PropertyType replacePropertyType(@PathVariable int id,@RequestBody PropertyType propertyType, HttpServletResponse res) {
		
		
		PropertyType result;
		
		try {
			result = propTypeSvc.updatePropertyType(propertyType, id);
			
			if(result == null ) {
				res.setStatus(400);
			}
			
			
		} catch (Exception e) {
			res.setStatus(400);
			result = null;
		}
		
		return result;
	}
	
	
	@DeleteMapping("types/{id}")
	public void deletePropertType(@PathVariable int id, HttpServletResponse res) {
		
		try {
			propTypeSvc.deletePropertyType(id);
			res.setStatus(204);
			
		}catch (Exception e) {
			res.setStatus(400);
			
		}
		
		
	}
	
	
	
}
