package org.coders.ratemycourses.model;

import lombok.Data;
import lombok.AllArgsConstructor;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@Document(collection = "users")
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