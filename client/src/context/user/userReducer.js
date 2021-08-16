import{
    SHOW_BRANCHES,
    SHOW_PAYMENT,
    SHOW_MODAL,
    PAYMENT,
    PAYMENT_FAIL
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
        case SHOW_MODAL:
            return{
                ...state,
                ...action.payload,
                showModal:action.payload
            }
        case PAYMENT:
            return{
                ...state,
                ...action.payload,
                isPaid:true
            }
        case PAYMENT_FAIL:
            return{
                ...state,
                ...action.payload,
                isPaid:false
            }
        default:
            return state
    }
}