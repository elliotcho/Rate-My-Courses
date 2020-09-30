package com.example.ratemycourses.controller;

import com.example.ratemycourses.model.User;
import com.example.ratemycourses.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/user")
public class UserController{
    @Autowired
    UserService userService;

    @PostMapping
    public void createUser(@RequestBody User newUser){
        userService.createUser(newUser);
    }
}