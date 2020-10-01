package com.example.ratemycourses.service;

import com.example.ratemycourses.model.Department;
import com.example.ratemycourses.repository.DepartmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DepartmentService{
    @Autowired
    DepartmentRepo repo;
}