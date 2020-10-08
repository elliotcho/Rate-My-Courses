package org.coders.ratemycourses.controller;

import org.coders.ratemycourses.model.User;
import org.coders.ratemycourses.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController{
    @Autowired
    UserService userService;

    @GetMapping
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @PostMapping
    public void createUser(@RequestBody User newUser){
        userService.createUser(newUser);
    }
}