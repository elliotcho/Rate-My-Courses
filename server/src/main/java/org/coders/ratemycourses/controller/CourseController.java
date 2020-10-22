package org.coders.ratemycourses.controller;

import org.coders.ratemycourses.model.Course;
import org.coders.ratemycourses.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;

@RestController
@RequestMapping("/api/course")
@CrossOrigin
public class CourseController{
    @Autowired
    CourseService courseService;

    @GetMapping
    public List<Course> getAllCourses(){
        return courseService.getAllCourses();
    }

    @PostMapping
    public Course addNewCourseToDB(@RequestBody Course c){
        Course newCourse = courseService.addNewCourse(c);

        if(newCourse.getId().equals("")){
            return null;
        }

        return newCourse;
    }

    @DeleteMapping("/{id}")
    public void deleteCourse(@PathVariable String id){
        courseService.deleteCourse(id);
    }
}
