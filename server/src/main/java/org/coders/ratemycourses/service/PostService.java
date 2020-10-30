package org.coders.ratemycourses.service;

import java.util.List;

import org.coders.ratemycourses.model.Post;
import org.coders.ratemycourses.repository.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService{
    @Autowired
    PostRepo repo;

    public List<Post> getAllPosts(){
        return repo.findAll();
    }

    public Post createNewPost(Post newPost){
        return repo.save(newPost);
    }

    public void deletePost(String id){
        try {
            repo.deleteById(id);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public List<Post> getUsersPosts(String userId){
        return repo.findByUserId(userId);
    }

    public int numberofPosts(String userId){
        return getUsersPosts(userId).size();
    }
  
    public List<Post> getPostByCourseId(String courseId){
        return repo.findByCourseId(courseId);
    }
}