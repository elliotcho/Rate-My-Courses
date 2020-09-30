package com.example.ratemycourses.service;

import com.example.ratemycourses.model.User;
import com.example.ratemycourses.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService{
    @Autowired
    UserRepo repo;

    public void createUser(User newUser){
        repo.save(newUser);
    }
}