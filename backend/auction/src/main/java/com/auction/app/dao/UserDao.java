package com.auction.app.dao;

import com.auction.app.model.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserDao extends JpaRepository<User, Long> {
    Optional<User> findUserByEmail(String email);
    Optional<User> findUserById(Long id);
    Boolean existsByEmail(String email);
    List<User> findAllByLastNameContainingIgnoreCase(String pattern);
}
