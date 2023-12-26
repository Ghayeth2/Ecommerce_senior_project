package com.auction.app.controller;

import com.auction.app.model.dtos.UserDto;
import com.auction.app.model.dtos.requests.SignupRequest;
import com.auction.app.service.abstracts.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

//@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/app/user")
public class UserController {
    private final UserService userService;//  Is it needed to have Bulk Operations 4 (save, update & delete) ?


    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public ResponseEntity<List<UserDto>> users() {
        return new ResponseEntity<>(userService.users(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<?> register(@Valid @RequestBody SignupRequest userDto){
        userService.register(userDto);
        return ResponseEntity.ok("ok");
    }
    // Still not working
    @GetMapping("/id/{id}") // if there's no user // Exception >> Activate advisor
    public ResponseEntity<UserDto> findUserById(@PathVariable("id") Long id){
        return new ResponseEntity<>(userService.findUserById(id), HttpStatus.OK);
    }
    // Still not working
    @GetMapping("/search")
    public ResponseEntity<UserDto> findUserByEmail(@RequestParam("email") String email){
        return new ResponseEntity<>(userService.findUserByEmail(email), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@Valid @RequestBody SignupRequest userDto, @PathVariable("id")Long id){
        userService.update(userDto, id);
        return ResponseEntity.ok(HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id){
        userService.delete(id);
        return ResponseEntity.ok(HttpStatus.ACCEPTED);
    }
}
