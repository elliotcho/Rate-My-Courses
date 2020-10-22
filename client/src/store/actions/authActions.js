import axios from 'axios';

const config = {headers: {'content-type': 'application/json'}};

export const login = (data, alert) => {
    return async (dispatch) => {
        const response = await axios.post('http://localhost:8080/api/user/login', data, config);
        const msg = response.data;    
    
        if(msg === "Username is not registered" || msg === "Password is incorrect"){
            alert.error(msg);
        }

        else{
            alert.success(msg);
        }
    }
}

export const signup = (data, alert) => {
    return async (dispatch) => {
        const response = await axios.post('http://localhost:8080/api/user', data, config);
        const msg = response.data;    
    
        if(msg === "Email is already registered" || "Username is already registered"){
            alert.error(msg);
        } else{
            alert.success(msg);
        }
    }
}