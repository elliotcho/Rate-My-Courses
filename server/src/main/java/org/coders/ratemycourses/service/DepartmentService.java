package org.coders.ratemycourses.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.coders.ratemycourses.model.Department;
import org.coders.ratemycourses.repository.DepartmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DepartmentService{
    @Autowired
    DepartmentRepo repo; //call this to get Mongo's functions

    public List<Department> getAllDepartments(){
        return repo.findAll();
    }

    public Department createDepartment(Department department){
        return repo.save(department);
    }

    public void deleteDepartment(String id){
        try {
            repo.deleteById(id);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public Department getDepartment(String id){
        return repo.findById(id).orElse(null);
    }
}
