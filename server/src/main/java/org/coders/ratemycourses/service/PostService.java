package org.coders.ratemycourses.service;

import org.coders.ratemycourses.model.Post;
import org.coders.ratemycourses.repository.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService{
    @Autowired
    PostRepo repo;
}