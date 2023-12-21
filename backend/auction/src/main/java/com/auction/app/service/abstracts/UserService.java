package com.auction.app.service.abstracts;

import com.auction.app.core.utils.results.DataResult;
import com.auction.app.core.utils.results.Result;
import com.auction.app.model.dtos.CredentialsDto;
import com.auction.app.model.dtos.UserDto;
import com.auction.app.model.dtos.UserDtoRegistration;
import com.auction.app.model.entities.User;

import java.util.List;
/*
        Throwing exceptions & Handling Exceptions must be
        in Lower Layers (NOT IN CONTROLLERS)
        Meaning: Within Service & Exception & ExceptionAdvisors Layers
 */
public interface UserService {
    List<UserDto> users();
    Result save(UserDtoRegistration userDto);
    Result resetPassword(Long id, String password);
    Result update(UserDto userDto, Long id);
    UserDto login(CredentialsDto credentialsDto);
    Result delete(Long id);
    UserDto findUserByEmail(String email);
    DataResult<UserDto> findUserById(Long id);
}
