package org.coders.ratemycourses.service;

import java.util.List;

import org.coders.ratemycourses.model.Course;
import org.coders.ratemycourses.model.Department;
import org.coders.ratemycourses.repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseService{
    @Autowired
    CourseRepo repo;

    public void addNewCourse(Course theCourse){
        repo.save(theCourse);
    }

    public void deleteCourse(String id){
        try {
            repo.deleteById(id);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}