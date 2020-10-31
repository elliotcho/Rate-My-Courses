import axios from 'axios';
const config = {headers: {'content-type': 'application/json'}};

export const createPost = async (data) =>{
    const response = await axios.post("http://localhost:8080/api/post", data, config);
    const post = response.data;
    return post;
}

export const getPostsByCourseId = async (courseId) => {
    const response = await axios.get(`http://localhost:8080/api/post/${courseId}`);
    const posts = response.data;
    return posts.reverse();
}

export const getUserPosts = async (userId) => {
    const response = await axios.get(`http://localhost:8080/api/post/user/${userId}`);
    const posts = response.data;
    return posts.reverse();
}