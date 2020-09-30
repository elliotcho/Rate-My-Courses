package com.example.ratemycourses.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@Document
public class User{
    @Id
    private String id;

    @NotEmpty
    @Email
    @Indexed(unique = true)
    private String email;

    @NotEmpty
    @Indexed(unique = true)
    private String username;

    @NotEmpty
    private String password;
    
    private boolean admin = false;
}