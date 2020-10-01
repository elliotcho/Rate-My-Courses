package com.example.ratemycourses.service;

import com.example.ratemycourses.model.Course;
import com.example.ratemycourses.repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseService{
    @Autowired
    CourseRepo repo;
}