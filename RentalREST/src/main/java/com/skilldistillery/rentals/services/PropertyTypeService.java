package com.skilldistillery.rentals.services;

import java.util.List;

import com.skilldistillery.rentals.entities.PropertyType;

public interface PropertyTypeService  {
	
	List<PropertyType> index();
	
	PropertyType findPropertyTypeById(int id);
	
	PropertyType createPropertyType(PropertyType propertyType);
	
	PropertyType showPropertyType(int id);
	
	void deletePropertyType(int propertyTypeId);
	
	PropertyType updatePropertyType(PropertyType propertyType, int id);
}
