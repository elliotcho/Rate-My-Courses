package com.example.ratemycourses.repository;

import com.example.ratemycourses.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepo extends MongoRepository<Post, String> {
}