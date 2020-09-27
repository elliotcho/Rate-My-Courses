package com.example.ratemycourses.model;

public class Post{
    private String id;  //unique id for each post
    private String content; //user's post
    private String [] like;
    private String [] dislike;
    private User theUser;  //user that submits the post

    public Post(String con, User myUser){
        content = con;
        theUser = myUser;
    }

    

}