import {USER_AUTHENTICATED} from '../constants/actionTypes';

const initState = {
    uid: null || window.localStorage.getItem('uid'),
    admin: false || window.localStorage.getItem('admin')
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case USER_AUTHENTICATED:
            window.localStorage.setItem('uid', action.uid);
            window.localStorage.setItem('admin', action.admin);

            return{
                ...state,
                uid: action.uid,
                admin: action.admin
            }
        default:
            return state;
    }
}

export default authReducer;