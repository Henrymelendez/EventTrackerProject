package com.skilldistillery.rentals.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.rentals.entities.Property;

public interface PropertyRepository extends JpaRepository<Property, Integer> {

}
