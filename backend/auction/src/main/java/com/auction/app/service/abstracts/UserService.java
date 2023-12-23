package com.auction.app.service.abstracts;

import com.auction.app.model.dtos.LoginDto;
import com.auction.app.model.dtos.UserDto;
import com.auction.app.model.dtos.UserFormDto;

import java.util.List;
/*
        Throwing exceptions & Handling Exceptions must be
        in Lower Layers (NOT IN CONTROLLERS)
        Meaning: Within Service & Exception & ExceptionAdvisors Layers
 */
public interface UserService {
    List<UserDto> users();
    UserDto register(UserFormDto userDto);
    void resetPassword(Long id, String password);
    UserDto update(UserFormDto userDto, Long id);
    UserDto login(LoginDto loginDto);
    void delete(Long id);
    UserDto findUserByEmail(String email);
    UserDto findUserById(Long id);
}
