package org.coders.ratemycourses.repository;

import org.coders.ratemycourses.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepo extends MongoRepository<User, String> {
}