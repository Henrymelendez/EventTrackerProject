package com.skilldistillery.rentals.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.rentals.entities.PropertyType;

public interface PropertTypeRepository extends JpaRepository<PropertyType, Integer> {
	
	PropertyType findByPropertyId_Id(int id);
	
	Optional<PropertyType> findById(int id);

}
