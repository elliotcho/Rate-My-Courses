package com.example.ratemycourses.model;

public class Course{
    private String id;
    private String name;    //course name
    private int number; //course number

    public Course(String n, int num){
        this.name = n;
        this.number = num;
    }

    public String getCourseName(){
        return name;
    }

    public int getCourseNumber(){
        return number;
    }

    public void setCourseName(String n){
        this.name = n;
    }

    public void setCourseNumber(int num){
        this.number = num;
    }
}