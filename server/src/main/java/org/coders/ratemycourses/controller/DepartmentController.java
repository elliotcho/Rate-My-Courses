package org.coders.ratemycourses.controller;

import org.coders.ratemycourses.model.Department;
import org.coders.ratemycourses.service.DepartmentService;
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
@RequestMapping("/api/department")
@CrossOrigin
public class DepartmentController{
    @Autowired
    DepartmentService departmentService;

    @GetMapping
    public List<Department> getAllDepartments(){
        return departmentService.getAllDepartments();
    }

    @PostMapping
    public Department createNewDepartment(@RequestBody Department newDepartment){
        return departmentService.createDepartment(newDepartment);
    }

    @DeleteMapping("/{id}")
    public void deleteDepartment(@PathVariable String id){
        departmentService.deleteDepartment(id);
    }

    @GetMapping("/code/{id}")
    public String getDepartmentCode(@PathVariable String id){
        return departmentService.getCode(id);
    }

}