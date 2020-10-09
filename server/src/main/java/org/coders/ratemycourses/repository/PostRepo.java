package org.coders.ratemycourses.repository;

import org.coders.ratemycourses.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepo extends MongoRepository<Post, String> {
}