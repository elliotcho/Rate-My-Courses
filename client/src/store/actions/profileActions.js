import axios from 'axios';

const config = {headers: {'content-type': 'application/json'}};

export const getUserById = async (userId) => {
    const response = await axios.get(`http://localhost:8080/api/user/${userId}`);
    const user = response.data;
    return user;
}

export const changeUsername = async (uid, newUsername) => {
    const data = {userId: uid, newUsername};
    const response = await axios.post('http://localhost:8080/api/user/change_username', JSON.stringify(data), config);
    const msg = response.data;
    return msg;
}