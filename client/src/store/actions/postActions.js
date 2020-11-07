import axios from 'axios';
const config = {headers: {'content-type': 'application/json'}};

export const getPostById = async (postId) => {
    const response = await axios.get(`http://localhost:8080/api/post/${postId}`);
    const post = response.data;
    return post;
}

export const createPost = async (data) =>{
    const response = await axios.post("http://localhost:8080/api/post", data, config);
    const post = response.data;
    return post;
}

export const getPostsByCourseId = async (courseId) => {
    const response = await axios.get(`http://localhost:8080/api/post/course/${courseId}`);
    const posts = response.data;
    return posts.reverse();
}

export const deletePostById = async (postId) => {
    await axios.delete(`http://localhost:8080/api/post/${postId}`);
}

export const likePost = async (uid, postId) => {
    if(!uid){
        return;
    }

    const data = {userId: uid, postId};

    const response = await axios.put('http://localhost:8080/api/post/like', JSON.stringify(data), config);
    const msg = response.data;
    return msg;
}

export const dislikePost = async (uid, postId) => {
    if(!uid){
        return;
    }

    const data = {userId: uid, postId};

    const response = await axios.put('http://localhost:8080/api/post/dislike', JSON.stringify(data), config);
    const flags = response.data;
    return flags ;
}

export const getLikeStatus = async (uid, postId) => {
    if(!uid){
        return [false, false];
    }

    const data = {userId: uid, postId};

    const response = await axios.post('http://localhost:8080/api/post/like_status', JSON.stringify(data), config);
    const status = response.data;
    return status;
}

export const deleteUserPosts = async (uid) => {
    const response = await axios.delete(`http://localhost:8080/api/post/user_posts/${uid}`);
    const isSuccessful = response.data;
    return isSuccessful;
}

export const editPost = async (postId, newPost) => {
    const data = {
        postId,
        reason: newPost
    }
    const response = await axios.post("http://localhost:8080/api/post/edit_post", JSON.stringify(data), config);
    const isSuccessful = response.data;
    return isSuccessful;
}