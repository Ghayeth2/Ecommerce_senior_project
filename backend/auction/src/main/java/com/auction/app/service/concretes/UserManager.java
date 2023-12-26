package com.auction.app.service.concretes;

import com.auction.app.core.bean.BCryptPasswordEncoderBean;
import com.auction.app.core.bean.PasswordEncoderBean;
import com.auction.app.core.exceptions.AppException;
import com.auction.app.core.utils.converter.DtoEntityConverter;
import com.auction.app.dao.UserDao;
import com.auction.app.model.dtos.UserDto;
import com.auction.app.model.dtos.requests.SignupRequest;
import com.auction.app.model.entities.User;
import com.auction.app.service.abstracts.UserService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Log4j2
public class UserManager implements UserService {
    private final UserDao userDao;
    private final PasswordEncoderBean passwordEncoderBean;
    private final DtoEntityConverter converter;
    private final BCryptPasswordEncoderBean bCryptPasswordEncoder;

    @Autowired
    public UserManager(UserDao userDao, PasswordEncoderBean passwordEncoderBean, DtoEntityConverter converter
                                , BCryptPasswordEncoderBean bCryptPasswordEncoder) {
        this.userDao = userDao;
        this.passwordEncoderBean = passwordEncoderBean;
        this.converter = converter;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    public List<UserDto> users() {
        // Adding extra check to see if there are any record or not
        Optional<List<User>> usersOps = Optional.ofNullable(userDao.findAll());

        if(usersOps.isPresent()){
            return usersOps.get().stream().
                    map(user -> {
                        UserDto userDto = UserDto.builder()
                                .id(user.getId())
                                .firstName(user.getFirstName())
                                .lastName(user.getLastName())
                                .email(user.getEmail())
                                .phoneNumber(user.getPhoneNumber())
                                .build();
                        return userDto;
                    }).collect(Collectors.toList());
        }else // In coming days, replace it with Exceptions along with Handling all
            // When adding exceptions MAKE USE OF STATIC HTTP STATUS
            return null;// or else throw exception notifying no users were found.

    }

    @Override
    public ResponseEntity<String >  register(SignupRequest userDto) {
        Optional<User> usr = userDao.findUserByEmail(userDto.getEmail());
        if(usr.isPresent())
            throw new AppException("User already exists", HttpStatus.BAD_REQUEST);
        User user = (User) converter.dtoToEntity(userDto, new User());
        user.setPassword(passwordEncoderBean.passwordEncoder().encode(userDto.getPassword()));
        userDao.save(user);
        return new ResponseEntity<>("User successfully registered ", HttpStatus.CREATED);
    }

    @Override
    public void resetPassword(Long id, String password) {

        Optional<User> user = userDao.findUserById(id);
        if(user.isPresent()){
            user.get().setId(id);
            user.get().setPassword(passwordEncoderBean.passwordEncoder().encode(password));
            userDao.save(user.get());
        }// In coming days, replace it with Exceptions along with Handling all
            // When adding exceptions MAKE USE OF STATIC HTTP STATUS

    }

    @Override
    public UserDto update(SignupRequest userDto, Long id) {
        // Check if fields are empty or not// maybe is done from @Validate
        Optional<User> opUser = userDao.findUserById(id);
        User user = null;
        if(opUser.isPresent())
            user = opUser.get();
        assert user != null;
        if(isPasswordMatching(userDto.getPassword(), user.getPassword())){
            user = (User) converter.dtoToEntity(userDto, new User());
            user.setPassword(passwordEncoderBean.passwordEncoder().encode(userDto.getPassword()));
            user.setId(id);
            userDao.save(user);
        }// place to throw & handle Exception
        return UserDto.builder()
                .firstName(userDto.getFirstName())
                .lastName(userDto.getLastName())
                .email(userDto.getEmail())
                .phoneNumber(userDto.getPhoneNumber())
                .id(user.getId())
                .build();
    }

    private boolean isPasswordMatching(String rawPassword, String encodedPassword){
        if (!encodedPassword.isEmpty()){
            // matches(rawPassword, encodedPassword) returns either (true > passwords match, false > passwords mismatch)
            return bCryptPasswordEncoder.bCryptPasswordEncoder().matches(rawPassword, encodedPassword);
        }
        return false; // This false means: UserNotFoundException Exception & Advisor R needed
    }

    @Override
    public void delete(Long id) {
        // place to use Optional<User> & an Exception
        userDao.deleteById(id);
    }

    @Override
    public UserDto findUserByEmail(String email) {
       Optional<User> user = userDao.findUserByEmail(email);
       if(user.isEmpty())
           throw new AppException("Unknown user", HttpStatus.NOT_FOUND);
       return (UserDto) converter.entityToDto(user.get(), new UserDto());


    }

    @Override
    public UserDto findUserById(Long id) {
        return new UserDto();
    }
}
