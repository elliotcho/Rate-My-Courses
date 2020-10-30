package org.coders.ratemycourses.model;

import lombok.Data;
import lombok.AllArgsConstructor;
import javax.validation.constraints.NotEmpty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@Document(collection = "posts")
public class Post{
    @Id
    private String id;  

    private List<String> likes;
    private List<String> dislikes;

    @NotEmpty
    private String reason; 

    @NotEmpty
    private Date datePosted;

    @NotEmpty
    private String userId;
    
    @NotEmpty
    private String courseId;

    @NotEmpty
    private String prof;
}