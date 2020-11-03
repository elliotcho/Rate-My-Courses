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

export const deletePostById = async (postId) => {
    await axios.delete(`http://localhost:8080/api/post/${postId}`);
}

export const getNumPostsByUser = async (userId) => {
    const response = await axios.get(`http://localhost:8080/api/post/num_posts/${userId}`);
    const numPosts = response.data;
    return numPosts;
}

export const likePost = async (uid, postId) => {
    const data = {userId: uid, postId};

    const response = await axios.put('http://localhost:8080/api/post/like', JSON.stringify(data), config);
    const msg = response.data;
    return msg;
}

export const dislikePost = async (uid, postId) => {
    const data = {userId: uid, postId};
    const response = await axios.put('http://localhost:8080/api/post/dislike', JSON.stringify(data), config);
    const msg = response.data;
    return msg;
}