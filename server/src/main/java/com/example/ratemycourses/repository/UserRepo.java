package com.example.ratemycourses.repository;

import com.example.ratemycourses.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepo extends MongoRepository<User, String> {
}