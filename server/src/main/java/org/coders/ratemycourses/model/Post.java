package org.coders.ratemycourses.model;

import lombok.Data;
import lombok.AllArgsConstructor;
import javax.validation.constraints.NotEmpty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Set;

@Data
@AllArgsConstructor
@Document(collection = "posts")
public class Post{
    @Id
    private String id;  

    private Set<String> likes;
    private Set<String> dislikes;

    @NotEmpty
    private String reason; 

    @NotEmpty
    private String dateCreated;

    @NotEmpty
    private String userId;
    
    @NotEmpty
    private String courseId;

    @NotEmpty
    private String prof;

    @NotEmpty
    private Integer stars;
    private Integer year;
}