package com.skilldistillery.rentals.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.skilldistillery.rentals.entities.PropertyType;
import com.skilldistillery.rentals.repositories.PropertTypeRepository;

@Service
public class PropetyTypeServiceImpl implements PropertyTypeService {
	@Autowired
	private PropertTypeRepository propTypeRepo;

	@Override
	public PropertyType findPropertyTypeById(int id) {
		
		return propTypeRepo.findByPropertyId_Id(id);
	}

	@Override
	public PropertyType createPropertyType(PropertyType propertyType) {
		if(propertyType != null) {
			
			
			propTypeRepo.save(propertyType);
		}
		return propertyType;
	}

	@Override
	public PropertyType showPropertyType(int id) {
		
		Optional<PropertyType> op = propTypeRepo.findById(id);
		if(op.isPresent()) {
			PropertyType po = op.get();
			return po;
		}
		
		
		return null;
	}

	@Override
	public void deletePropertyType(int propertyTypeId) {
		
		Optional<PropertyType> op = propTypeRepo.findById(propertyTypeId);
		
		if(op.isPresent()) {
			propTypeRepo.deleteById(propertyTypeId);
		}

	}

	@Override
	public PropertyType updatePropertyType(PropertyType propertyType, int id) {

		Optional<PropertyType> op = propTypeRepo.findById(id);
			if(op.isPresent()) {
				PropertyType managed = op.get();
				managed.setName(propertyType.getName());
				
				propTypeRepo.save(managed);
				return managed;
				
			}
		
		
				return null;
	}

	@Override
	public List<PropertyType> index() {
	
		return propTypeRepo.findAll();
	}
	
	
	

}
