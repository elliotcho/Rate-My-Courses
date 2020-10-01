package com.example.ratemycourses.controller;

import com.example.ratemycourses.model.Course;
import com.example.ratemycourses.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api/course")
@CrossOrigin
public class CourseController{
    @Autowired
    CourseService courseService;
}
