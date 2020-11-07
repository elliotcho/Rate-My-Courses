package org.coders.ratemycourses.service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.text.DecimalFormat;

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

    public Post getPostById(String id){
        return repo.findById(id).orElse(null);
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

    public String getUserLikesRatio(String uid){
        List<Post> posts = repo.findByUserId(uid);

        int numLikes = 0;
        int numDislikes = 0;

        for (Post post : posts) {
            numLikes += post.getLikes().size();
            numDislikes += post.getDislikes().size();
        }

        if(numLikes == 0){
            return "0%";
        } 

        else if(numDislikes == 0){
            return "100%";
        } 
  
        double ratio = (double) (numLikes) / (numLikes + numDislikes);  
        ratio *= 100; 

        return (String) new DecimalFormat("0.0").format(ratio) + "%";
    }

    public String getUserAvgRating(String uid){
        List<Post> posts = repo.findByUserId(uid);

        if(posts.size() == 0){
            return "No posts created";
        }

        int sum = 0;

        for(Post post: posts){
            sum += post.getStars();
        }

        double avgRating = (double) sum/posts.size();
   
        return (String) new DecimalFormat("0.0").format(avgRating);
    }

    public boolean deleteUserActions(String userId){
        List<Post> userPosts = repo.findByUserId(userId);
        
        if(!userPosts.isEmpty()){
            repo.deleteAll(userPosts);
        }

        for(Post p: repo.findAll()){
            if(p.getLikes().contains(userId)){
                p.getLikes().remove(userId);
            }

            if(p.getDislikes().contains(userId)){
                p.getDislikes().remove(userId);
            }
            repo.save(p);
        }
        return true;
    }

    public boolean updatePost(String postId, String newContent){
        Post post = repo.findById(postId).orElse(null);
        if(post != null){
        post.setReason(newContent);
        repo.save(post);
        return true;
        }
        return false;
    }

}