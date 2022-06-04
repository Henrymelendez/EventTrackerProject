package com.skilldistillery.rentals.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.skilldistillery.rentals.entities.Property;
import com.skilldistillery.rentals.repositories.PropertyRepository;

@Service
public class PropertyServiceImpl implements PropertyService {
	@Autowired
	private PropertyRepository propRepo;

	@Override
	public List<Property> index() {
		
		return propRepo.findAll();
		
		
	}

	@Override
	public Property create(Property property) {
		if(property != null) {
			propRepo.save(property);
			
			
		}
		return property;
	}

	@Override
	public Property show(int id) {
		Optional<Property> op = propRepo.findById(id);
		if(op.isPresent()) {
			Property p = op.get();
			return p;
		}
		
		return null;
	}

	@Override
	public boolean deleteProperty(int id) {
		propRepo.deleteById(id);
		if(show(id) == null) {
			return true;
		}
		
		return false;
		
	}

	@Override
	public Property update(Property property, int id) {
		
		Optional<Property> op = propRepo.findById(id);
		
		if(op.isPresent()) {
			Property managed = op.get();
			managed.setPropertyAddress(property.getPropertyAddress());
			managed.setRentalAmount(property.getRentalAmount());
			managed.setPurchaseDate(property.getPurchaseDate());
			managed.setPurchaseAmount(property.getPurchaseAmount());
			managed.setNote(property.getNote());
			managed.setLeaseStatus(property.getLeaseStatus());
			managed.setPropertyType(property.getPropertyType());
			
			propRepo.save(managed);
			return managed;
			
		}
		return null;
	}
	
	
	


}
