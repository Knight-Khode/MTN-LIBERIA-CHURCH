import React,{useReducer} from 'react'
import axios from 'axios'
import userContext from './userContext'
import userReducer from './userReducer'
import {
    SHOW_BRANCHES,
    SHOW_PAYMENT,
    SHOW_MODAL,
    PAYMENT,
    PAYMENT_FAIL
}from '../types'

const UserState = (props) => {
    const initialState={
        showBranches:"hide2",
        showPayments:"hide2",
        showModal:"hide2",
        isPaid:false
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

    const modal = (text)=>{
        dispatch({
            type:SHOW_MODAL,
            payload:text
        })
    }

    const registerPayment = (formData)=>{
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }

        try{
            //api call to make payment via momo at backend
            //const res = await axios.post("route goes here",formData,config)
            dispatch({
                type:PAYMENT,
                payload:formData
            })
        }catch(err){
            dispatch({
                type:PAYMENT_FAIL,
                payload://Error message from backend just incase an input field was empty
                //for now we are hard coding an error:
                "Check all your input fields"
            })
        }
    }

    return (
        <userContext.Provider value={{
            showBranches:state.showBranches,
            showPayments:state.showPayments,
            showModal:state.showModal,
            isPaid:state.isPaid,
            showBranch,
            showPayment,
            modal,
            registerPayment
        }}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState
