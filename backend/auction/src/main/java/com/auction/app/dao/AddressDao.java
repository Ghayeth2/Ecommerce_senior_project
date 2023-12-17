package com.auction.app.dao;

import com.auction.app.model.entities.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressDao extends JpaRepository<Address, Long> {
}
