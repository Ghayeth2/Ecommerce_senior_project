package com.auction.app.controller;

import com.auction.app.core.utils.results.DataResult;
import com.auction.app.core.utils.results.Result;
import com.auction.app.model.dtos.UserDto;
import com.auction.app.model.dtos.UserDtoRegistration;
import com.auction.app.model.entities.User;
import com.auction.app.service.abstracts.UserService;
import jakarta.validation.Valid;
import lombok.extern.java.Log;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
@Log4j2
@RequestMapping("/api-rest/user")
public class UserController {
    private UserService userService;//  Is it needed to have Bulk Operations 4 (save, update & delete) ?

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("")
    public ResponseEntity<DataResult<List<UserDto>>> users() {
        return new ResponseEntity<>(userService.users(), HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<?> save(@Valid @RequestBody UserDtoRegistration userDto){
        return new ResponseEntity<>(userService.save(userDto), HttpStatus.CREATED);
    }
    // Still not working
    @GetMapping("/id/{id}") // if there's no user // Exception >> Activate advisor
    public ResponseEntity<DataResult<UserDto>> findUserById(@PathVariable("id") Long id){
        return new ResponseEntity<>(userService.findUserById(id), HttpStatus.OK);
    }
    // Still not working
    @GetMapping("/search")
    public ResponseEntity<DataResult<UserDto>> findUserByEmail(@RequestParam("email") String email){
        log.info(email);
        return new ResponseEntity<>(userService.findUserByEmail(email), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@Valid @RequestBody UserDto userDto, @PathVariable("id")Long id){
        return new ResponseEntity<>(userService.update(userDto, id), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Result> delete(@PathVariable("id") Long id){
        return new ResponseEntity<>(userService.delete(id), HttpStatus.ACCEPTED);
    }
}
