package com.example.ratemycourses.model;

import java.util.random;

public class User{
    private String id;
    private String email;
    private String password;
    private String username;

    public User(String username){
        this.username = username;
        
    }

    public void setEmail(String address){
        email = address;
    }

    public String getEmail(){
        return email;
    }


    public String getusername(){
        return username;
    }

    public void setusername(String username){
        this.username = username;
    }
}