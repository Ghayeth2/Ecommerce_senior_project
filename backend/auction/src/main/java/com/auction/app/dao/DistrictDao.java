package com.auction.app.dao;

import com.auction.app.model.entities.District;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DistrictDao extends JpaRepository<District, Long> {
}
