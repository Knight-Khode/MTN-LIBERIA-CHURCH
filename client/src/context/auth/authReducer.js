import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_USER,
    SEND_OTP,
    SEND_OTP_FAIL,
    USER_LOADED,
    SHOW_FORGOTTEN_PASSWORD,
    SEND_RECOVERY_EMAIL
} from '../types'

export default (state,action)=>{
    switch(action.type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                ...action.payload,
                loggedIn:true
            }
        case REGISTER_SUCCESS:
            return{
                ...state,
                ...action.payload,
                signUp:true
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT_USER:
            return{
                ...state,
                isAuthenticated:false,
                loggedIn:false,
                user:null,
                error:action.payload
            }
        case SEND_OTP:
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true
            }
        case SEND_OTP_FAIL:
            return{
                ...state,
                ...action.payload,
                isAuthenticated:false
            }
        case SHOW_FORGOTTEN_PASSWORD:
            return{
                ...state,
                ...action.payload,
                showForgotModal:action.payload
            }
        case SEND_RECOVERY_EMAIL:
            return{
                ...state,
                ...action.payload,
                recovery:true
            }
        case USER_LOADED:
            return{
                ...state,
                ...action.payload,
                user:action.payload
            }
        default:
            return state
    }
}