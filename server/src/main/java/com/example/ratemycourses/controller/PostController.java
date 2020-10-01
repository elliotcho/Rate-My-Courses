package com.example.ratemycourses.controller;

import com.example.ratemycourses.model.Post;
import com.example.ratemycourses.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api/post")
@CrossOrigin
public class PostController{
    @Autowired
    PostService postService;
}