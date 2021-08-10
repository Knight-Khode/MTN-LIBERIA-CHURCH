import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_USER
} from '../types'

export default (state,action)=>{
    switch(action.type){
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true
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
        default:
            return state
    }
}