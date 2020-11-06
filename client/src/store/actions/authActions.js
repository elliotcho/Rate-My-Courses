import {USER_AUTHENTICATED} from '../constants/actionTypes';
import axios from 'axios';

const config = {headers: {'content-type': 'application/json'}};

export const login = (data, alert) => {
    return async (dispatch) => {
        let response = await axios.post('http://localhost:8080/api/user/login', data, config);
        const msg = response.data;    
    
        if(msg === "Username is not registered" || msg === "Password is incorrect" || msg === "Account is banned"){
            alert.error(msg);
        }

        else{
            response = await axios.get(`http://localhost:8080/api/user/is_admin/${msg}`);
            const admin = response.data;

            dispatch({
                type: USER_AUTHENTICATED, 
                uid: msg,
                admin
            });
        }
    }
}

export const signup = (data, alert) => {
    return async (dispatch) => {
        let response = await axios.post('http://localhost:8080/api/user', JSON.stringify(data), config);
        const msg = response.data;    
    
        if(msg === "Email is already registered" || msg === "Username is already registered"){
            alert.error(msg);
        } 
        
        else{
            response = await axios.get(`http://localhost:8080/api/user/is_admin/${msg}`);
            const admin = response.data;

            dispatch({
                type: USER_AUTHENTICATED, 
                uid: msg,
                admin
            });
        }
    }
}