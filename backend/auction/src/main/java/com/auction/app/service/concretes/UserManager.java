package com.auction.app.service.concretes;

import com.auction.app.core.bean.BCryptPasswordEncoderBean;
import com.auction.app.core.bean.PasswordEncoderBean;
import com.auction.app.core.utils.converter.DtoEntityConverter;
import com.auction.app.core.utils.results.*;
import com.auction.app.dao.UserDao;
import com.auction.app.model.dtos.UserDto;
import com.auction.app.model.dtos.UserDtoRegistration;
import com.auction.app.model.entities.User;
import com.auction.app.service.abstracts.UserService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Log4j2
public class UserManager implements UserService {
    private UserDao userDao;
    private PasswordEncoderBean passwordEncoderBean;
    private DtoEntityConverter converter;
    private BCryptPasswordEncoderBean bCryptPasswordEncoder;

    @Autowired
    public UserManager(UserDao userDao, PasswordEncoderBean passwordEncoderBean, DtoEntityConverter converter
                                , BCryptPasswordEncoderBean bCryptPasswordEncoder) {
        this.userDao = userDao;
        this.passwordEncoderBean = passwordEncoderBean;
        this.converter = converter;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
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
        Optional<User> opUser = userDao.findUserById(id);
        User user = null;
        if(opUser.isPresent())
            user = opUser.get();
        if(isPasswordMatching(userDto.getPassword(), user.getPassword())){
            user = (User) converter.dtoToEntity(userDto, new User());
            user.setPassword(passwordEncoderBean.passwordEncoder().encode(userDto.getPassword()));
            user.setId(id);
            userDao.save(user);
            return new SuccessResult("User has been updated successfully.");
        }else
            return new FailureResult("Passwords do not match, please enter current password.");
    }

    private boolean isPasswordMatching(String rawPassword, String encodedPassword){
        if (!encodedPassword.isEmpty()){
            // matches(rawPassword, encodedPassword) returns either (true > passwords match, false > passwords mismatch)
            return bCryptPasswordEncoder.bCryptPasswordEncoder().matches(rawPassword, encodedPassword);
        }
        return false; // This false means: UserNotFoundException Exception & Advisor R needed
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
        log.info("email service 1 "+email);
        Optional<User> user = userDao.findUserByEmail(email);
        log.info(user.get());
        if(user.isPresent()){
            return new SuccessDataResult<>((UserDto) converter.entityToDto(
                    user.get(), new UserDto()
            ));
        }else // update exception & exception handling
            // When adding exceptions MAKE USE OF STATIC HTTP STATUS
            return new FailureDataResult<>("No data was found!");
    }

    @Override
    public DataResult<UserDto> findUserById(Long id) {
        Optional<User> user = userDao.findUserById(id);
        User user1 = null;
        if(user.isPresent()){
            return new SuccessDataResult<>((UserDto) converter.entityToDto(
                    user.get(), new UserDto()
            ));
        }else// In coming days, replace it with Exceptions along with Handling all
            // When adding exceptions MAKE USE OF STATIC HTTP STATUS
            return new FailureDataResult<>("No data was found!");
    }
}
