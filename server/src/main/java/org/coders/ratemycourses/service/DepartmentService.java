package org.coders.ratemycourses.service;

import java.util.List;

import org.coders.ratemycourses.model.Department;
import org.coders.ratemycourses.model.User;
import org.coders.ratemycourses.repository.DepartmentRepo;
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

    public void deleteDepartment(String ID){
        try {
            repo.deleteById(ID);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
