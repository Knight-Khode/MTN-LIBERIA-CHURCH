import {
    VIEW_PAYMENT,
    VIEW_USERS
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
        default:
            return state
    }
}