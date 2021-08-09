import {
    VIEW_PAYMENT,
    VIEW_USERS,
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGIN_SUCCESS
} from '../types'

export default (state,action)=>{
    switch(action.type){
        case VIEW_PAYMENT:
            return{
                ...state,
                ...action.payload,
                defaultClass:action.payload
            }
        case VIEW_USERS:
            return{
                ...state,
                ...action.payload,
                viewUsers:action.payload
            }
        case ADMIN_LOGIN_SUCCESS:
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true
            }
        case ADMIN_LOGIN_FAIL:
            return{
                ...state,
                isAuthenticated:false,
                error:action.payload
            }
        default:
            return state
    }
}