package org.coders.ratemycourses.repository;

import org.coders.ratemycourses.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface PostRepo extends MongoRepository<Post, String> {
    List<Post> findByCourseId(String courseId);
}