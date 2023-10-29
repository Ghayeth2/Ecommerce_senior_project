package com.auction.app.service.concretes;

import com.auction.app.core.bean.PasswordEncoderBean;
import com.auction.app.core.utils.converter.DtoEntityConverter;
import com.auction.app.core.utils.results.*;
import com.auction.app.dao.UserDao;
import com.auction.app.model.dtos.UserDto;
import com.auction.app.model.dtos.UserDtoRegistration;
import com.auction.app.model.entities.User;
import com.auction.app.service.abstracts.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserManager implements UserService {
    private UserDao userDao;
    private PasswordEncoderBean passwordEncoderBean;
    private DtoEntityConverter converter;

    @Autowired
    public UserManager(UserDao userDao, PasswordEncoderBean passwordEncoderBean, DtoEntityConverter converter) {
        this.userDao = userDao;
        this.passwordEncoderBean = passwordEncoderBean;
        this.converter = converter;
    }

    @Override
    public DataResult<List<UserDto>> users() {
        // Adding extra check to see if there are any record or not
        Optional<List<User>> usersOps = Optional.ofNullable(userDao.findAll());

        if(usersOps.isPresent()){
            return new DataResult<>(usersOps.get().stream().
                    map(user -> {
                        UserDto userDto = UserDto.builder()
                                .firstName(user.getFirstName())
                                .lastName(user.getLastName())
                                .email(user.getEmail())
                                .phoneNumber(user.getPhoneNumber())
                                .build();
                        return userDto;
                    }).collect(Collectors.toList())
            );
        }else // In coming days, replace it with Exceptions along with Handling all
            // When adding exceptions MAKE USE OF STATIC HTTP STATUS
            return new FailureDataResult<>("No data was found!", null);// or else throw exception notifying no users were found.

    }

    @Override
    public Result save(UserDtoRegistration userDto) {
        User user = (User) converter.dtoToEntity(userDto, new User());
        user.setPassword(passwordEncoderBean.passwordEncoder().encode(userDto.getPassword()));
        return new SuccessDataResult<>(userDao.save(user), "User is added successfully");
    }

    @Override
    public Result resetPassword(Long id, String password) {
        Optional<User> user = userDao.findUserById(id);
        if(user.isPresent()){
            user.get().setId(id);
            user.get().setPassword(passwordEncoderBean.passwordEncoder().encode(password));
            return new SuccessDataResult<>(userDao.save(user.get()),
                    "Password is resat.");
        }else// In coming days, replace it with Exceptions along with Handling all
            // When adding exceptions MAKE USE OF STATIC HTTP STATUS
            return new FailureResult("No user was found!");
    }

    @Override
    public Result update(UserDto userDto, Long id) {
        // Check if fields are empty or not// maybe is done from @Validate
        User user = (User) converter.dtoToEntity(userDto, new User());
        user.setId(id);
        return new SuccessDataResult<>(userDao.save(user), "" +
                "User has been updated.");
    }

    @Override
    public Result delete(Long id) {
        if(!userDao.existsById(id))
            return new FailureResult("No user was found");
        userDao.deleteById(id);
        return new Result("Deleted successfully");
    }

    @Override
    public DataResult<UserDto> findUserByEmail(String email) {
        Optional<User> user = userDao.findUserByEmail(email);
        if(user.isPresent()){
            return new DataResult<>((UserDto) converter.entityToDto(
                    user, new UserDto()
            ));
        }else // update exception & exception handling
            // When adding exceptions MAKE USE OF STATIC HTTP STATUS
            return new FailureDataResult<>("No data was found!");
    }

    @Override
    public DataResult<UserDto> findUserById(Long id) {
        Optional<User> user = userDao.findUserById(id);
        if(user.isPresent()){
            return new SuccessDataResult<>((UserDto) converter.entityToDto(
                    user, new UserDto()
            ));
        }else// In coming days, replace it with Exceptions along with Handling all
            // When adding exceptions MAKE USE OF STATIC HTTP STATUS
            return new FailureDataResult<>("No data was found!");
    }
}
