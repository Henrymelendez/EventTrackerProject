package com.skilldistillery.rentals.controllers;

import java.util.List;
import java.util.Optional;

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

import com.skilldistillery.rentals.entities.Property;
import com.skilldistillery.rentals.services.PropertyService;


@RequestMapping("api")
@RestController
public class PropertyController {
	
	@Autowired
	private PropertyService propServ;
	
	
	
	@GetMapping("properties")
	public List<Property> index(){
		return propServ.index();
	}
	
	@PostMapping("properties")
	public Property createProperty(@RequestBody Property property, HttpServletResponse res) {
		if(property != null) {
			propServ.create(property);
			res.setStatus(201);
			return property;
		}else {
			res.setStatus(404);
			return null;
		}		
		
	}
	
	@GetMapping("properties/{id}")
	public Property findPropertyById(@PathVariable int id, HttpServletResponse res) {
		
		return propServ.show(id);
		
	}
	
	
	@DeleteMapping("properties/{id}")
	public boolean deletePropertyId(@PathVariable int id, HttpServletResponse res) {
		
		propServ.deleteProperty(id);
		if(propServ.show(id) == null) {
			return true;
		}
		return false;
	}
	
	@PutMapping("properties/{id}")
	public Property updateProperty(@PathVariable int id ,@RequestBody Property property, HttpServletResponse res) {
		
		property = propServ.update(property, id);
		
		if(property == null) {
			res.setStatus(404);
		}
		
		return property;
		
		
		
		
	}
	
	
	
	
	

}
