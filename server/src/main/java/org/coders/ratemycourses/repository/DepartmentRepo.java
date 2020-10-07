package org.coders.ratemycourses.repository;

import org.coders.ratemycourses.model.Department;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DepartmentRepo extends MongoRepository<Department, String> {
}