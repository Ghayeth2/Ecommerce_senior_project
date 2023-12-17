package com.auction.app.dao;

import com.auction.app.model.entities.Country;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountryDao extends JpaRepository<Country, Long> {
}
