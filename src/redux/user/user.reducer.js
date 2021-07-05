//initiating state for user
const INITIAL_STATE = {
    currentUser: null
}

//We can default stat to initial state
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_CURRENTUSER':
            return { 
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default userReducer;