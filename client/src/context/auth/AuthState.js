import React,{useReducer} from 'react'
import axios from 'axios'
import authContext from './authContext'
import authReducer from './authReducer'
import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_USER,
    SEND_OTP,
    SEND_OTP_FAIL
}from '../types'

const AuthState = (props) => {
    const initialState={
        isAuthenticated:null,
        user:null,
        error:null,
        loggedIn:null,
        signUp:null
    }

    const [state,dispatch]=useReducer(authReducer,initialState)

    //Register User
    const register = async (formData)=>{
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }

        try{
            //api call to register user at backend
            //const res = await axios.post("route goes here",formData,config)
            console.log(formData)
            dispatch({
                type:REGISTER_SUCCESS,
                payload:formData
            })
        }catch(err){
            dispatch({
                type:REGISTER_FAIL,
                payload://Error message from backend just incase an input field was empty
                //for now we are hard coding an error:
                "Check all your input fields"
            })
        }
    }

     //Login User
     const login = async (formData)=>{
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }

        try{
            //api call to login user is made here
            //const res = await axios.post('api route goes here',formData,config)
            console.log(formData)
            dispatch({
                type:LOGIN_SUCCESS
            })

            //loadUser()
            
        }catch(err){
            dispatch({
                type:LOGIN_FAIL,
                payload://error incase login deatails are wrong goes here, would be using dummy error for now
                "Check login credentials"
            })
        }
    }

    //SEND OTP DIGITS
    const sendOtp = (otp)=>{
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }

        try{
            //api call to send 6 otp digits to backend
            //const res = await axios.post('api route goes here',otp,config)
            dispatch({
                type:SEND_OTP
            })

            //loadUser()
            
        }catch(err){
            dispatch({
                type:SEND_OTP_FAIL,
                payload://error if otp is wrong
                "Check otp digits"
            })
        }
    }

    const logout = ()=>{
        dispatch({
            type:LOGOUT_USER
        })
    }

    return (
        <authContext.Provider value={{
            isAuthenticated:state.isAuthenticated,
            user:state.user,
            error:state.error,
            loggedIn:state.loggedIn,
            signUp:state.signUp,
            logout,
            register,
            login,
            sendOtp
        }}>
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState
