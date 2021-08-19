import{
    SHOW_BRANCHES,
    SHOW_PAYMENT,
    SHOW_MODAL,
    SHOW_USER_SIDEBAR,
    PAYMENT,
    PAYMENT_FAIL,
    GET_EVENTS,
    GET_CHURCH_BRANCHES
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
        case GET_EVENTS:
            return{
                ...state,
                ...action.payload,
                events:action.payload
            }
        case GET_CHURCH_BRANCHES:
            return{
                ...state,
                ...action.payload,
                chruchBranches:action.payload
            }
        case SHOW_USER_SIDEBAR:
            return{
                ...state,
                ...action.payload,
                showSideBarClass:action.payload
            }
        default:
            return state
    }
}