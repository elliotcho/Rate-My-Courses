package org.coders.ratemycourses.controller;

import java.util.List;

import org.coders.ratemycourses.model.Post;
import org.coders.ratemycourses.service.PostService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    @PutMapping("/like")
    public boolean[] likePost(@RequestBody String data){
        JSONObject obj = new JSONObject(data);
        
        String userId = (String) obj.get("userId");
        String id = (String) obj.get("postId");

        return postService.like(userId, id);
    }

    @PutMapping("/dislike")
    public boolean[] dislikePost(@RequestBody String data){
        JSONObject temp = new JSONObject(data);

        String userId = (String) temp.get("userId");
        String postId = (String) temp.get("postId");

        return postService.dislike(userId, postId);
    }

    @PostMapping("/like_status")
    public boolean[] getLikeStatus(@RequestBody String data){
        JSONObject obj = new JSONObject(data);

        String userId = (String) obj.get("userId");
        String postId = (String) obj.get("postId");

        return postService.likeStatus(userId, postId);
    }

    @GetMapping("/user/likes_ratio/{uid}")
    public String getUserLikesRatio(@PathVariable String uid){
        return postService.getUserLikesRatio(uid);
    }

    @GetMapping("/user/avg_rating/{uid}")
    public String getUserAvgRating(@PathVariable String uid){
        return postService.getUserAvgRating(uid);
    }

    @DeleteMapping("/user_posts/{userId}")
    public boolean deleteUserPosts(@PathVariable String userId){
        return postService.deleteUserActions(userId);
    }

    @PostMapping("/edit_post")
    public boolean editPost(@RequestBody String data){
        JSONObject obj = new JSONObject(data);
        String newContent = (String) obj.get("reason");
        String postId = (String) obj.get("postId");
        return postService.updatePost(postId, newContent);
    }
}