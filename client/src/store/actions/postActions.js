import {LOAD_POSTS} from '../constants/actionTypes';
import axios from 'axios';

const config = {headers: {'content-type': 'application/json'}};

//create a post
export const createPost = async (data) =>{
    const response = await axios.post("http://localhost:8080/api/post", data, config);
    const post = response.data;
    return post;
}

//delete a post
export const deletePostById = async (postId) => {
    await axios.delete(`http://localhost:8080/api/post/${postId}`);
}

//like a post
export const likePost = async (uid, postId) => {
    if(!uid){
        return;
    }

    const data = {userId: uid, postId};

    const response = await axios.put('http://localhost:8080/api/post/like', JSON.stringify(data), config);
    const msg = response.data;
    return msg;
}

//dislike a post
export const dislikePost = async (uid, postId) => {
    if(!uid){
        return;
    }

    const data = {userId: uid, postId};

    const response = await axios.put('http://localhost:8080/api/post/dislike', JSON.stringify(data), config);
    const flags = response.data;
    return flags ;
}

//check if user liked/disliked a post
export const getLikeStatus = async (uid, postId) => {
    if(!uid){
        return [false, false];
    }

    const data = {userId: uid, postId};

    const response = await axios.post('http://localhost:8080/api/post/like_status', JSON.stringify(data), config);
    const status = response.data;
    return status;
}

//delete all of the user's posts
export const deleteUserPosts = async (uid) => {
    const response = await axios.delete(`http://localhost:8080/api/post/user_posts/${uid}`);
    const isSuccessful = response.data;
    return isSuccessful;
}

//edit a post
export const updatePost = async (postId, newReason) => {
    const data = {postId, reason: newReason};

    const response = await axios.post("http://localhost:8080/api/post/edit_post", JSON.stringify(data), config);
    const isSuccessful = response.data;
    return isSuccessful;
}

//get all posts for a course
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

//get all posts by a user
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

//get one post by its id
export const getPostById = (postId) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:8080/api/post/${postId}`);
        const post = response.data;
        
        dispatch({
            type: LOAD_POSTS,
            posts: [post]
        })
    }
}

//reload the global state holding all the posts causing a re-render in components
export const reloadPosts = (posts) => {
    return (dispatch) => {
        dispatch({
            type: LOAD_POSTS,
            posts
        });
    }
}

export const formatCount = (num) => {
    if(num >= 1000000000){
        let billions = Math.floor(num/1000000000);
        let hundredMillions = Math.floor((num%1000000000)/100000000);

        return `${billions}.${hundredMillions}B`;
    }

    else if(num >= 1000000){
        let millions = Math.floor(num/1000000);
        let hundredThousands = Math.floor((num%1000000)/100000);

        return `${millions}.${hundredThousands}M`
    }

    else if(num >= 1000){
        let thousands = Math.floor(num/1000);
        let hundreds = Math.floor((num%1000)/100)

        return `${thousands}.${hundreds}K`
    }

    return num;
}