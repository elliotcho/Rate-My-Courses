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

    public int numberofPosts(String numberId){
        return getUsersPosts(numberId).size();
    }

    public int userRatingRatio(String id){
        List<Post> temp = getUsersPosts(id);
        int numLikes = 0;
        int numDislikes = 0;
        int numberofLikesandDislikes=0;
        for (Post post : temp) {
            numLikes += post.getLikes().size();
            numDislikes += post.getDislikes().size();
        }
        numberofLikesandDislikes = numDislikes + numLikes;
        return numLikes/numDislikes;
        
        
    }

}