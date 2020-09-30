package com.example.ratemycourses.controller;

import com.example.ratemycourses.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class UserController{
    
    @Autowired
    UserService userService;

    @GetMapping("/")
    public String getName(){
        return userService.getName();
    }
}