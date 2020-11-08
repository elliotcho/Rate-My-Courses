package org.coders.ratemycourses.controller;

import org.coders.ratemycourses.model.User;
import org.coders.ratemycourses.service.UserService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

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
    public String createUser(@RequestBody String data){
        return userService.createUser(data);
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody User user){
        return userService.loginUser(user);
    }

    @PostMapping("/ban")
    public User banUser(@RequestBody String data){
        JSONObject obj = new JSONObject(data);

        String id = (String) obj.get("id");
        String action = (String) obj.get("action");

        return userService.handleBan(id, action);
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable String id){
        return userService.getUserById(id);
    }

    @PostMapping("/change_username")
    public String changeUsername(@RequestBody String data){
        JSONObject obj = new JSONObject(data);

        String userId = (String) obj.get("userId");
        String newName = (String) obj.get("newUsername");
        String currUsername = (String) obj.get("currUsername");
        
        return userService.changeName(userId, newName, currUsername);
    }
  
    @PostMapping("/change_password")
    public boolean changeUserPassword(@RequestBody String data){
        JSONObject obj = new JSONObject(data);

        String userId = (String) obj.get("userId");
        String currPassword = (String) obj.get("currPassword");
        String newPassword = (String) obj.get("newPassword");

        return userService.changeUserPassword(userId, currPassword, newPassword);
    }

    @PostMapping("/color")
    public boolean changeUserColor(@RequestBody String data){
        JSONObject obj = new JSONObject(data);

        String userId = (String) obj.get("userId");
        String colorId = (String) obj.get("color");

        return userService.changeColor(userId, colorId);
    }

    @GetMapping("/is_admin/{id}")
    public boolean getUserAdminStatus(@PathVariable String id){
        return userService.getUserAdminStatus(id);
    }

    @DeleteMapping("/delete_user/{userId}")
    public boolean deleteUser(@PathVariable String userId){
        return userService.deleteUser(userId);
    }
}