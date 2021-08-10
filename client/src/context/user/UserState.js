import React,{useReducer} from 'react'
import userContext from './userContext'
import userReducer from './userReducer'
import {
    SHOW_BRANCHES
}from '../types'

const UserState = (props) => {
    const initialState={
        showBranches:"hide2",
    }

    const [state,dispatch]=useReducer(userReducer,initialState)

    const showBranch = (text)=>{
        dispatch({
            type:SHOW_BRANCHES,
            payload:text
        })
    }

    return (
        <userContext.Provider value={{
            showBranches:state.showBranches,
            showBranch
        }}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState
