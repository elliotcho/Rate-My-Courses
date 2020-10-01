package com.example.ratemycourses.model;

import lombok.Data;
import lombok.AllArgsConstructor;
import javax.validation.constraints.NotEmpty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@Document(collection = "courses")
public class Course{
    @Id
    private String id;

    @NotEmpty
    private String name; 
    
    @NotEmpty
    private int number; 

    @NotEmpty
    private String departmentId;
}