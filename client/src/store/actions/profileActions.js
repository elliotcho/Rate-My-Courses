import axios from 'axios';

export const getUserById = async (userId) => {
    const response = await axios.get(`http://localhost:8080/api/user/${userId}`);
    const user = response.data;
    return user;
}