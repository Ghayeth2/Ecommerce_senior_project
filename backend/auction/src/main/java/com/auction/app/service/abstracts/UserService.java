package com.auction.app.service.abstracts;

import com.auction.app.core.utils.results.DataResult;
import com.auction.app.core.utils.results.Result;
import com.auction.app.model.dtos.UserDto;
import com.auction.app.model.dtos.UserDtoRegistration;
import com.auction.app.model.entities.User;

import java.util.List;

public interface UserService {
    DataResult<List<UserDto>> users();
    Result save(UserDtoRegistration userDto);
    Result resetPassword(Long id, String password);
    Result update(UserDto userDto, Long id);
    Result delete(Long id);
    DataResult<UserDto> findUserByEmail(String email);
    DataResult<UserDto> findUserById(Long id);
}
