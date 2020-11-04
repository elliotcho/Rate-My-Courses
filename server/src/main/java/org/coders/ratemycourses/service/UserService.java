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

        if(!repo.findByUsername(newUser.getUsername()).isEmpty()){
            return "Username is already registered";
        }

        newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
        return repo.save(newUser).getId();
    }

    public String loginUser(User user){
        List<User> searchResult = repo.findByUsername(user.getUsername());

        //user not found
        if(searchResult.isEmpty()){
            return "Username is not registered";
        }

        //passwords do not match
        if(!passwordEncoder.matches(user.getPassword() , searchResult.get(0).getPassword())){
           return "Password is incorrect";
        }

        //account is banned
        if(searchResult.get(0).isBanned()){
            return "Account is banned";
        }

        //return user id
        return searchResult.get(0).getId();
    }

    public User handleBan(String id, String action){
        User user = repo.findById(id).orElse(null);

        if(action.equals("Ban")){
            user.setBanned(true);
        } else{
            user.setBanned(false);
        }

        repo.save(user);

        return user;
    }

    public User getUserById(String id){
        User user = repo.findById(id).orElse(null);

        if(user != null){
            user.setPassword("");
        }

        return user;
    }

    public String changeName(String userId, String newUsername){
        User user = repo.findById(userId).orElse(null);

        List<User> currUsers = repo.findByUsername(newUsername);
        boolean exists = !currUsers.isEmpty();

        if(exists){
            return "Failed";
        }

        user.setUsername(newUsername);
        repo.save(user);

        return newUsername;
    }
      
    public boolean changeUserPassword(String newPassword, String userId){
        User user = repo.findById(userId).orElse(null);

        if(passwordEncoder.matches(newPassword, user.getPassword())){
            user.setPassword(passwordEncoder.encode(newPassword));
            repo.save(user);

            return true;
        }

        return false;
    }
}