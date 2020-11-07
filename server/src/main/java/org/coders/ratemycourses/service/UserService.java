package org.coders.ratemycourses.service;

import org.json.JSONObject;
import org.coders.ratemycourses.model.User;
import org.coders.ratemycourses.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.core.env.Environment;
import java.util.List;
import java.util.Random;

@Service
public class UserService{

    @Autowired
    private UserRepo repo;
    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    private String[] backgroundColors = {"#03adfc","#fc0303","#db6400","#ffa36c","#a0ffe6","#03fc90"};
  
    @Autowired
    private Environment env;

    public List<User> getAllUsers(){
        List<User> result = repo.findAll();

        for(int i=0;i<result.size();i++){
            result.get(i).setPassword("");
        }

        return result;
    }

    public String createUser(String data){
        JSONObject obj = new JSONObject(data);
        
        String username = (String) obj.get("username");
        String email = (String) obj.get("email");
        String adminCode = (String) obj.get("adminCode");

        //check if email/username already exists

        if(!repo.findByEmail(email).isEmpty()){
            return "Email is already registered";
        } else if(!repo.findByUsername(username).isEmpty()){
            return "Username is already registered";
        } 

        Random rand = new Random();
        int upperbound = backgroundColors.length;
        int randomIndex = rand.nextInt(upperbound);

        User newUser = new User();

        //check if admin code is valid

        if(passwordEncoder.matches(adminCode, env.getProperty("ADMIN_CODE"))){
            newUser.setAdmin(true);
        } else if(!adminCode.isEmpty()){
            return "Invalid admin code";
        }

        newUser.setUsername(username);
        newUser.setEmail(email);
        newUser.setDateCreated((String) obj.getString("dateCreated"));
        newUser.setPassword(passwordEncoder.encode((String) obj.get("password")));
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

    public boolean changeColor(String userId, String color){
        User user = repo.findById(userId).orElse(null);

        if(user != null){
            user.setDisplayPictureColor(color);
            repo.save(user);
            return true;
        }

        return false;
    }

    public boolean getUserAdminStatus(String id){
        User user = repo.findById(id).orElse(null);

        if(user == null){
            return false;
        }

        return user.getAdmin();
    }

    public boolean delete(String id){
        User user = repo.findById(id).orElse(null);
        if(user != null){
            repo.deleteById(id);
            return true;
        }
        return false;
    }


}