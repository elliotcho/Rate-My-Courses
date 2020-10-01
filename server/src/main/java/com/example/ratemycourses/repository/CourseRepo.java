package com.example.ratemycourses.repository;

import com.example.ratemycourses.model.Course;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CourseRepo extends MongoRepository<Course, String> {
}