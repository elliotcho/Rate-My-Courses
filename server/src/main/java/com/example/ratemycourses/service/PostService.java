package com.example.ratemycourses.service;

import com.example.ratemycourses.model.Post;
import com.example.ratemycourses.repository.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService{
    @Autowired
    PostRepo repo;
}