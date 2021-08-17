import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_USER,
    SEND_OTP,
    SEND_OTP_FAIL
} from '../types'

export default (state,action)=>{
    switch(action.type){
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return{
                ...state,
                ...action.payload
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT_USER:
            return{
                ...state,
                isAuthenticated:false,
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
        default:
            return state
    }
}