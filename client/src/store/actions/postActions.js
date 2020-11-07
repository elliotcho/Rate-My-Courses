import {LOAD_POSTS} from '../constants/actionTypes';
import axios from 'axios';

const config = {headers: {'content-type': 'application/json'}};

export const createPost = async (data) =>{
    const response = await axios.post("http://localhost:8080/api/post", data, config);
    const post = response.data;
    return post;
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

export const updatePost = async (postId, newReason) => {
    const data = {postId, reason: newReason};
    const response = await axios.post("http://localhost:8080/api/post/edit_post", JSON.stringify(data), config);
    const isSuccessful = response.data;
    return isSuccessful;
}

export const getPostsByCourseId = (courseId) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:8080/api/post/course/${courseId}`);
        const posts = response.data;
        posts.reverse();

        dispatch({
            type: LOAD_POSTS,
            posts
        });
    }
}

export const getUserPosts = (userId) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:8080/api/post/user/${userId}`);
        const posts = response.data;
        posts.reverse();

        dispatch({
            type: LOAD_POSTS,
            posts
        });
    }
}

export const getPostById = (postId) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:8080/api/post/${postId}`);
        const post = response.data;
        
        dispatch({
            types: LOAD_POSTS,
            posts: [post]
        })
    }
}