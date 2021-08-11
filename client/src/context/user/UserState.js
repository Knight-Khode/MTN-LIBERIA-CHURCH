import React,{useReducer} from 'react'
import userContext from './userContext'
import userReducer from './userReducer'
import {
    SHOW_BRANCHES,
    SHOW_PAYMENT
}from '../types'

const UserState = (props) => {
    const initialState={
        showBranches:"hide2",
        showPayments:"hide2"
    }

    const [state,dispatch]=useReducer(userReducer,initialState)

    const showBranch = (text)=>{
        dispatch({
            type:SHOW_BRANCHES,
            payload:text
        })
    }

    const showPayment = (text)=>{
        dispatch({
            type:SHOW_PAYMENT,
            payload:text
        })
    }

    return (
        <userContext.Provider value={{
            showBranches:state.showBranches,
            showPayments:state.showPayments,
            showBranch,
            showPayment
        }}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState
