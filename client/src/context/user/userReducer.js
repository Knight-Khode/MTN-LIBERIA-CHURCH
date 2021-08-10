import{
    SHOW_BRANCHES
} from '../types'

export default (state,action)=>{
    switch(action.type){
        case SHOW_BRANCHES:
            return{
                ...state,
                ...action.payload,
                showBranches:action.payload
            }
        default:
            return state
    }
}