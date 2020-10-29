import axios from 'axios';
const config = {headers: {'content-type': 'application/json'}};

export const createPost = async (data ) =>{
    const response = await axios.post("http://localhost:8080/api/post", data, config);
    const post = response.data;
    return post;
}