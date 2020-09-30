package com.example.ratemycourses.model;

public class Department{
    private String id;
    private String name;    //department name

    public void setDepartmentName(String d){
        name = d;
    }

    public String getDepartmentName(int number){
        return name;
    }
}