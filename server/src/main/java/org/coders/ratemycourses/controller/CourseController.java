package org.coders.ratemycourses.controller;

import org.coders.ratemycourses.model.Course;
import org.coders.ratemycourses.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/course")
@CrossOrigin
public class CourseController{
    @Autowired
    CourseService courseService;

    @PostMapping
    public void addNewCourseToDB(@RequestBody Course c){
        courseService.addNewCourse(c);
    }

    @DeleteMapping("/{id}")
    public void deleteCourse(@PathVariable String id){
        courseService.deleteCourse(id);
    }
}
