package org.coders.ratemycourses.service;

import org.coders.ratemycourses.model.User;
import org.coders.ratemycourses.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService{
    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    private UserRepo repo;

    public List<User> getAllUsers(){
        List<User> result = repo.findAll();

        for(int i=0;i<result.size();i++){
            result.get(i).setPassword("");
        }

        return result;
    }

    public String createUser(User newUser){
        if(!repo.findByEmail(newUser.getEmail()).isEmpty()){
            return "Email is already registered";
        }

        newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
        return repo.save(newUser).getId();
    }

    public String loginUser(User user){
        List<User> searchResult = repo.findByUsername(user.getUsername());

        if(searchResult.isEmpty()){
            return "Username is not registred";
        }

        if(!passwordEncoder.matches(user.getPassword() , searchResult.get(0).getPassword())){
           return "Password is incorrect";
        }

        return searchResult.get(0).getId();
    }
}