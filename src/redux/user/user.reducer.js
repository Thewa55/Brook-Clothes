import { UserActionTypes } from "./user.types"

//initiating state for user
const INITIAL_STATE = {
    currentUser: null
}

//We can default stat to initial state
const userReducer = (state = INITIAL_STATE, action) => {
    console.log(action)
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return { 
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default userReducer;