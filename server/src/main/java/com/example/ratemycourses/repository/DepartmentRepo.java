package com.example.ratemycourses.repository;

import com.example.ratemycourses.model.Department;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DepartmentRepo extends MongoRepository<Department, String> {
}