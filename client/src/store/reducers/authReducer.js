import {USER_AUTHENTICATED} from '../constants/actionTypes';

const initState = {
    uid: '' || window.localStorage.getItem('uid'),
    status: '' || window.localStorage.getItem('status')
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case USER_AUTHENTICATED:
            window.localStorage.setItem('uid', action.uid);
            window.localStorage.setItem('status', action.status);

            return{
                ...state,
                uid: action.uid,
                status: action.status
            }
        default:
            return state;
    }
}

export default authReducer;