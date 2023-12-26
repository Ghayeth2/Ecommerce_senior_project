package com.auction.app.service.abstracts;

import com.auction.app.model.dtos.UserDto;
import com.auction.app.model.dtos.requests.SignupRequest;
import org.springframework.http.ResponseEntity;

import java.util.List;
/*
        Throwing exceptions & Handling Exceptions must be
        in Lower Layers (NOT IN CONTROLLERS)
        Meaning: Within Service & Exception & ExceptionAdvisors Layers
 */
public interface UserService {
    List<UserDto> users();
    ResponseEntity<String > register(SignupRequest userDto);
    void resetPassword(Long id, String password);
    UserDto update(SignupRequest userDto, Long id);
    void delete(Long id);
    UserDto findUserByEmail(String email);
    UserDto findUserById(Long id);
}
