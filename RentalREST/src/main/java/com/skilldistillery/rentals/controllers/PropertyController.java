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

import com.skilldistillery.rentals.entities.Property;
import com.skilldistillery.rentals.services.PropertyService;


@RequestMapping("api")
@RestController
public class PropertyController {
	
	@Autowired
	private PropertyService propServ;
	
	
	
	@GetMapping("type/properties")
	public List<Property> index(){
		return propServ.index();
	}
	
	@PostMapping("types/{id}/properties")
	public Property createProperty(@RequestBody Property property,@PathVariable int id, HttpServletResponse res) {
		if(property != null) {
			propServ.create(property, id);
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
	
	
	@DeleteMapping("types/{id}/properties/{pid}")
	public boolean deleteProperty(@PathVariable int id,@PathVariable int pid,  HttpServletResponse res) {
		
			propServ.deleteProperty(pid,id);
			if(propServ.show(pid) == null) {
				res.setStatus(200);
				return true;
			}
			res.setStatus(404);
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
