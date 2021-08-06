import React,{useReducer} from 'react'
import adminContext from './adminContext'
import adminReducer from './adminReducer'
import {
    VIEW_PAYMENT,
    VIEW_USERS
} from '../types'

const AdminState = (props) => {
    const initialState={
        defaultClass:"hide",
        viewUsers:"hide"
    }

    const [state,dispatch]=useReducer(adminReducer,initialState)

    //Change class
    const changeClass = (text)=>{
        dispatch({
            type:VIEW_PAYMENT,
            payload:text
        })
    }

    const changeClass2 =(text)=>{
        dispatch({
            type:VIEW_USERS,
            payload:text
        })
    }

    return (
        <adminContext.Provider value={{
            defaultClass:state.defaultClass,
            viewUsers:state.viewUsers,
            changeClass,
            changeClass2
        }}>
            {props.children}
        </adminContext.Provider>
    )
}

export default AdminState
