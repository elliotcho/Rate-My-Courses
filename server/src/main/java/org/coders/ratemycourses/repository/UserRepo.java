package org.coders.ratemycourses.repository;

import java.util.List;

import org.coders.ratemycourses.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepo extends MongoRepository<User, String> {
	List<User> findByEmail(String email);
	List<User> findByUsername(String username);
}