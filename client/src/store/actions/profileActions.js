import axios from 'axios';

const config = {headers: {'content-type': 'application/json'}};

export const getUserById = async (userId) => {
    const response = await axios.get(`http://localhost:8080/api/user/${userId}`);
    const user = response.data;
    return user;
}

export const getUserPosts = async (userId) => {
    const response = await axios.get(`http://localhost:8080/api/post/user/${userId}`);
    const posts = response.data;
    return posts.reverse();
}

export const getNumPostsByUser = async (userId) => {
    const response = await axios.get(`http://localhost:8080/api/post/num_posts/${userId}`);
    const numPosts = response.data;
    return numPosts;
}

export const getUserLikesRatio = async (uid) => {
    const response = await axios.get(`http://localhost:8080/api/post/user/likes_ratio/${uid}`);
    const percentage = response.data;
    return percentage;
}

export const getAvgRatingByUser = async (uid) => {
    const response = await axios.get(`http://localhost:8080/api/post/user/avg_rating/${uid}`);
    const avgRating = response.data;
    return avgRating;
}

export const changeUsername = async (uid, newUsername, currUsername) => {
    const data = {
        userId: uid, 
        newUsername,
        currUsername
    };
    const response = await axios.post('http://localhost:8080/api/user/change_username', JSON.stringify(data), config);
    const msg = response.data;
    return msg;
}

export const changePassword = async (uid, newPassword, currPassword) => {
    const data = {
        userId: uid, 
        currPassword,
        newPassword
    };

    const response = await axios.post('http://localhost:8080/api/user/change_password', JSON.stringify(data), config);
    const isSuccessful = response.data;
    return isSuccessful;
}