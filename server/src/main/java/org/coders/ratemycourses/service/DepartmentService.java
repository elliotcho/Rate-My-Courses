package org.coders.ratemycourses.service;

import java.util.List;

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

    public void createDepartment(Department D){
        repo.save(D);
    }

    public void deleteDepartment(String ID){
        try {
            repo.deleteById(ID);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
