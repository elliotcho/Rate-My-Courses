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

    @GetMapping("/user/{userId}")
    public List<Post> getUserPosts(@PathVariable String userId){
        return postService.getUsersPosts(userId);
    }
      
    @GetMapping("/{courseId}")
    public List<Post> getPostByCourseId(@PathVariable String courseId){
        return postService.getPostByCourseId(courseId);
    }

    @GetMapping("/num_posts/{userId}")
    public int numberOfPosts(@PathVariable String userId){
        return postService.numberofPosts(userId);
    }

    ////////////////////////////////////////////////////////////////
    //unused
    ////////////////////////////////////////////////////////////////

    @GetMapping("/user/rating/{id}")
    public int ratingRatio(@PathVariable String id){
        return postService.userRatingRatio(id);
    }
}