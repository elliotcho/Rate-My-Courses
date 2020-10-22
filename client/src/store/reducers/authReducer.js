const initState = {
    uid: null || window.localStorage.getItem('uid')
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default authReducer;