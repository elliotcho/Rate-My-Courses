package com.example.ratemycourses.service;

import java.util.List;

import com.example.ratemycourses.model.Course;
import com.example.ratemycourses.model.Department;
import com.example.ratemycourses.repository.CourseRepo;
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