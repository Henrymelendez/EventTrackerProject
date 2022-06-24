package com.skilldistillery.rentals.services;

import java.util.List;

import com.skilldistillery.rentals.entities.Property;

public interface PropertyService {
	
	List<Property> index();
	
	Property create(Property property);
	Property show(int id);
	
	boolean deleteProperty(int id);
	
	Property update(Property property, int id);

}
