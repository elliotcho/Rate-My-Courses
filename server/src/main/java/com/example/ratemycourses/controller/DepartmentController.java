package com.example.ratemycourses.controller;

import com.example.ratemycourses.model.Department;
import com.example.ratemycourses.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/department")
@CrossOrigin
public class DepartmentController{
    @Autowired
    DepartmentService departmentService;

    @PostMapping
    public void createNewDepartment(@RequestBody Department newDepartment){
        departmentService.createDepartment(newDepartment);
    }

}