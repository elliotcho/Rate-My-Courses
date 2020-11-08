import axios from 'axios';

const config = {headers: {'content-type': 'application/json'}};

//get user's information
export const getUserById = async (userId) => {
    const response = await axios.get(`http://localhost:8080/api/user/${userId}`);
    const user = response.data;
    return user;
}

//get number of posts created by user
export const getNumPostsByUser = async (userId) => {
    const response = await axios.get(`http://localhost:8080/api/post/num_posts/${userId}`);
    const numPosts = response.data;
    return numPosts;
}

//get likes to dislikes ratio for all of the user's posts
export const getUserLikesRatio = async (uid) => {
    const response = await axios.get(`http://localhost:8080/api/post/user/likes_ratio/${uid}`);
    const percentage = response.data;
    return percentage;
}

//get average rating given by user
export const getAvgRatingByUser = async (uid) => {
    const response = await axios.get(`http://localhost:8080/api/post/user/avg_rating/${uid}`);
    const avgRating = response.data;
    return avgRating;
}

//change users's username
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

//change user's password
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

//change user's profile color
export const changeUserColor = async (uid, color) => {
    const data = {userId: uid, color};
    const reponse = await axios.post('http://localhost:8080/api/user/color', JSON.stringify(data), config);
    const isChanged = reponse.data;
    return isChanged;
}

//delete user
export const deleteUser = async (uid) => {
    const response = await axios.delete(`http://localhost:8080/api/user/delete_user/${uid}`);
    const isSuccessful = response.data;
    return isSuccessful;
}