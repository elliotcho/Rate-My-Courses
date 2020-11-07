import {LOAD_POSTS} from '../constants/actionTypes';

const initState = {
    posts: []
}

const postReducer = (state = initState, action) => {
    switch(action.type){
        case LOAD_POSTS:
            return{
                ...state,
                posts: [...action.posts]
            }
        default:
            return state;
    }
}

export default authReducer;