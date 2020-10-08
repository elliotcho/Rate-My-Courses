package org.coders.ratemycourses.controller;

import org.coders.ratemycourses.model.Post;
import org.coders.ratemycourses.service.PostService;
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