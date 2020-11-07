package org.coders.ratemycourses.repository;

import java.util.List;

import org.coders.ratemycourses.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepo extends MongoRepository<Post, String> {
    List<Post> findByUserId(String userId);
    List<Post> findByCourseId(String courseId);
    
}