package org.coders.ratemycourses.service;

import org.coders.ratemycourses.model.Course;
import org.coders.ratemycourses.repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CourseService{
    @Autowired
    CourseRepo repo;

    public List<Course> getAllCourses(){
        return repo.findAll();
    }

    public Course addNewCourse(Course theCourse){
        try {
            if( !theCourse.getDepartmentId().isEmpty()){
                return repo.save(theCourse);
            } else{
                return null;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }  

        return new Course("", "", -1 , "");
    }

    public void deleteCourse(String id){
        try {
            if( !repo.findById(id).isEmpty()){
                repo.deleteById(id);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}