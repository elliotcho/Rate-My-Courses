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

    public boolean[] likeStatus(String userId, String postId){
        Post post = repo.findById(postId).orElse(null);

        boolean[] result = new boolean[2];
        result[0] = post.getLikes().contains(userId);
        result[1] = post.getDislikes().contains(userId);

        return result;
    }

    public boolean[] like(String userId, String id){
        Post post = repo.findById(id).orElse(null);

        Set<String> currentLikes = post.getLikes();
        Set<String> currentDislikes = post.getDislikes();

        boolean inLikes = currentLikes.contains(userId);
        boolean inDislikes = currentDislikes.contains(userId);

        if(inLikes){
            currentLikes.remove(userId);
            post.setLikes(currentLikes);
        }

        if(inDislikes){
            currentDislikes.remove(userId);
            post.setDislikes(currentDislikes);
        }

        if(!inLikes){
            post.getLikes().add(userId);
        }
      
        repo.save(post);
        
        return new boolean[]{inLikes, inDislikes};
    }

    public boolean[] dislike(String userId, String postId){
        Post post = repo.findById(postId).orElse(null);

        Set<String> currentLikes = post.getLikes();
        Set<String> currentDislikes = post.getDislikes();
        
        boolean inLikes = currentLikes.contains(userId);
        boolean inDislikes = currentDislikes.contains(userId);

        if(inDislikes){
            currentDislikes.remove(userId);
            post.setDislikes(currentDislikes);
        }

        if(inLikes){
            currentLikes.remove(userId);
            post.setLikes(currentLikes);
        }

        if(!inDislikes){
            post.getDislikes().add(userId);
        }
     
        repo.save(post);

        return new boolean[]{inLikes, inDislikes};
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