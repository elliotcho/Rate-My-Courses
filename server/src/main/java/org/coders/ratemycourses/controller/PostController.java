package org.coders.ratemycourses.controller;

import java.util.List;

import org.coders.ratemycourses.model.Post;
import org.coders.ratemycourses.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/post")
@CrossOrigin
public class PostController{
    @Autowired
    PostService postService;

    @GetMapping
    public List<Post> getallPosts(){
        return postService.getAllPosts();
    }

    @PostMapping
    public Post createPost(@RequestBody Post newPost){
        return postService.createNewPost(newPost);
    }

    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable String id){
        postService.deletePost(id);
    }

    @GetMapping("/{id}")
    public Post getPost(@PathVariable String id){
        return postService.getPostById(id);
    }
}