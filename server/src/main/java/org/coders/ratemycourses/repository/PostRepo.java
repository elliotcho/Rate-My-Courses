package org.coders.ratemycourses.repository;

import java.util.List;

import org.coders.ratemycourses.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface PostRepo extends MongoRepository<Post, String> {
    List<Post> findByUserId(String userId);
    List<Post> findByCourseId(String courseId);
    Post findByPostId(String id);
}