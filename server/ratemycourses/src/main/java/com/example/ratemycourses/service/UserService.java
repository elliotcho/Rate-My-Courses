package com.example.ratemycourses.service;

import com.example.ratemycourses.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserService{
    User user = new User("Charan");

    public String getName(){
        return user.getName();
    }
}