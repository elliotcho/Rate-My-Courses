package com.example.ratemycourses.service;

import java.util.List;

import com.example.ratemycourses.model.Department;
import com.example.ratemycourses.model.User;
import com.example.ratemycourses.repository.DepartmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DepartmentService{
    @Autowired
    DepartmentRepo repo; //call this to get Mongo's functions


    public void createDepartment(Department D){
        
        // List<User> result = repo.findByid();
        // if(result != null){
        // boolean admin = result.get(0).getAdmin();
        // }
        // if(admin){
             repo.save(D);

        //  }
        }
}
