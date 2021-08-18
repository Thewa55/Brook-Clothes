import UserActionTypes from "./user.types"

//initiating state for user
const INITIAL_STATE = {
    currentUser: null,
    error: null
};

//We can default stat to initial state
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
        case UserActionTypes.SIGN_IN_SUCCESS:
        // case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
        // case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return{
                ...state,
                currentUser: null,
                error: null
            }
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        // case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
        // case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
};

export default userReducer;