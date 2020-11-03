package org.coders.ratemycourses.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.HashSet;

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
        newPost.setLikes(new HashSet<>());
        newPost.setDislikes(new HashSet<>());
        
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
  
    public List<Post> getPostByCourseId(String courseId){
        return repo.findByCourseId(courseId);
    }

    public int numberofPosts(String userId){
        return getUsersPosts(userId).size();
    }

    public String like(String userId, String postId){
        Optional<Post> temp = repo.findById(postId);
        Set<String> currentLikes = temp.get().getLikes();
        boolean exists = currentLikes.contains(userId);

        if(exists){
            currentLikes.remove(userId);
            temp.get().setLikes(currentLikes);
            repo.save(temp.get());
            return "Removed Like \n";
        }
        //currentLikes.add(userId);
        temp.get().getLikes().add(userId);
        repo.save(temp.get());
        return userId;
    }

    public String dislike(String userId, String postId){
        Optional<Post> temp = repo.findById(postId);
        Set<String> currentDislike = temp.get().getDislikes();
        boolean exists = currentDislike.contains(userId);
        if(exists){
            currentDislike.remove(userId);
            temp.get().setDislikes(currentDislike);
            repo.save(temp.get());
            return "Removed Dislike \n";
        }
       // currentDislike.add(userId);
        temp.get().getDislikes().add(userId);
        repo.save(temp.get());
        return userId;
    }

    // <!-------------------------------------->
    public int getUserLikesRatio(String id){
        List<Post> userPosts = getUsersPosts(id);
        int numLikes = 0;
        int numDislikes = 0;

        for (Post post : userPosts) {
            numLikes += post.getLikes().size();
            numDislikes += post.getDislikes().size();
        }
        
        int total = numDislikes + numLikes;
        
        return numLikes/numDislikes;
    }
}