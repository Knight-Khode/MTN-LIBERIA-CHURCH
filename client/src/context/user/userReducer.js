import{
    SHOW_BRANCHES,
    SHOW_PAYMENT
} from '../types'

export default (state,action)=>{
    switch(action.type){
        case SHOW_BRANCHES:
            return{
                ...state,
                ...action.payload,
                showBranches:action.payload
            }
        case SHOW_PAYMENT:
            return{
                ...state,
                ...action.payload,
                showPayments:action.payload
            }
        default:
            return state
    }
}