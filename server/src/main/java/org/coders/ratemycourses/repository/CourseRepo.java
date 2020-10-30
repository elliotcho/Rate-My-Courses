package org.coders.ratemycourses.repository;

import org.coders.ratemycourses.model.Course;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface CourseRepo extends MongoRepository<Course, String> {
	List<Course> findByDepartmentId(String departmentId);
}