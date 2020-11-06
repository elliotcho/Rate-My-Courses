package org.coders.ratemycourses.service;

import org.coders.ratemycourses.model.User;
import org.coders.ratemycourses.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Random;

@Service
public class UserService{
    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    private String[] backgroundColors = {"#03adfc",
                                     "#0356fc",
                                     "#5a03fc",
                                     "#9803fc",
                                    "#fc0303",
                                    "#fc6f03",
                                    "#db6400",
                                    "#f4abc4",
                                    "#ffa36c",
                                    "#7d0633",
                                    "#3b6978",
                                    "#a0ffe6",
                                    "#03fc90"
                                };

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
        Random rand = new Random();
        int upperbound = backgroundColors.length;
        int randomIndex = rand.nextInt(upperbound);
        if(!repo.findByEmail(newUser.getEmail()).isEmpty()){
            return "Email is already registered";
        }

        if(!repo.findByUsername(newUser.getUsername()).isEmpty()){
            return "Username is already registered";
        }

        newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
        newUser.setDisplayPictureColor(backgroundColors[randomIndex]);
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

    public String changeName(String userId, String newUsername, String currUsername){
        User user = repo.findById(userId).orElse(null);
        if(!user.getUsername().equals(currUsername)){
            return "Mismatch";
        }

        List<User> currUsers = repo.findByUsername(newUsername);
        boolean exists = !currUsers.isEmpty();

        if(exists){
            return "Failed";
        }

        user.setUsername(newUsername);
        repo.save(user);

        return newUsername;
    }
      
    public boolean changeUserPassword(String userId, String currPassword, String newPassword){
        User user = repo.findById(userId).orElse(null);

        if(passwordEncoder.matches(currPassword, user.getPassword())){
            user.setPassword(passwordEncoder.encode(newPassword));
            repo.save(user);
            return true;
        }

        return false;
    }

    public boolean changeColor(String userId, String colorId){
        User user = repo.findById(userId).orElse(null);
        if(user != null){
            user.setDisplayPictureColor(colorId);
            repo.save(user);
            return true;
        }
        return false;
    }

}