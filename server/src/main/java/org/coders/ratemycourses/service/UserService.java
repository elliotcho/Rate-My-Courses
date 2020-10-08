package org.coders.ratemycourses.service;

import org.coders.ratemycourses.model.User;
import org.coders.ratemycourses.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService{
    @Autowired
    UserRepo repo;

    public List<User> getAllUsers(){
        return repo.findAll();
    }

    public void createUser(User newUser){
        repo.save(newUser);
    }
}