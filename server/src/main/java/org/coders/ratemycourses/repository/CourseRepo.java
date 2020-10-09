package org.coders.ratemycourses.repository;

import org.coders.ratemycourses.model.Course;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CourseRepo extends MongoRepository<Course, String> {
}