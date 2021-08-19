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
    SEND_OTP_FAIL,
    SHOW_FORGOTTEN_PASSWORD,
    SEND_RECOVERY_EMAIL,
    USER_LOADED,
    baseUrl
}from '../types'

const AuthState = (props) => {
    const initialState={
        isAuthenticated:null,
        user:null,
        error:null,
        loggedIn:null,
        signUp:null,
        showForgotModal:"hide2",
        recovery:null
    }

    const [state,dispatch]=useReducer(authReducer,initialState)

    //Load User (this function loads user details after they sign up or login)
    const loadUser = async()=>{
        try{
            const config={
                mode:'cors',
                method:'GET',
                cache:'no-cache',
                headers:{
                    'Authorization':'Access',
                    'Content-Type' : 'application/json'
                }
            }
            //this sends a get request to grab single user detail imediately after they signup or login 
            const res = await fetch('',config)
            dispatch({
                type:USER_LOADED,
                payload:res.json()
            })
        }catch(error){
            //any error from the backend should be passed here
        }
    }

    //Register User
    const register = async (formData)=>{
        const config={
            mode:'cors',
            method:'POST',
            cache:'no-cache',
            headers:{
                'Authorization':'Access',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(formData)
        }

        try{
            const res = await fetch(`${baseUrl}/api/auth/register`,config);
            var responseData = await res.json();

            console.log('resp data', responseData)
            dispatch({
                type:REGISTER_SUCCESS,
                payload:formData
            })
            //uncomment the code below when you are able to load logged in or signed up user data
            //loadUser()

        }catch(err){
            console.error('API Error', err)
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
            mode:'cors',
            method:'POST',
            cache:'no-cache',
            headers:{
                'Authorization':'Access',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(formData)
        }
        try{
            const res = await fetch(`${baseUrl}/api/auth/login`,config);
            var responseData = await res.json();

            console.log('resp data', responseData)
            dispatch({
                type:LOGIN_SUCCESS,
                payload:formData
            })
            //uncomment the code below when you are able to load logged in or signed up user data
            //loadUser()
        }catch(err){
            console.error('API Error', err)
            dispatch({
                type:LOGIN_FAIL,
                payload:"Check all your input fields"
            })
        }
   
    }

    //SEND OTP DIGITS
    const sendOtp = async (otp)=>{
        const config={
            mode:'cors',
            method:'POST',
            cache:'no-cache',
            headers:{
                'Authorization':'Access',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(otp)
        }
        try{
            const res = await fetch(`${baseUrl}/api/auth/verifymsisdn`,config);
            var responseData = await res.json();

            console.log('resp data', responseData)
            dispatch({
                type:SEND_OTP,
                payload:otp
            })
        }catch(err){
            console.error('API Error', err)
            dispatch({
                type:SEND_OTP_FAIL,
                payload:"Check all your input fields"
            })
        }     
    }

    const sendRecoveryEmail = async(email)=>{
        const config={
            mode:'cors',
            method:'POST',
            cache:'no-cache',
            headers:{
                'Authorization':'Access',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(email)
        }

        try{
            //api call to recover password 
            const res = await fetch(`${baseUrl}api​/Auth​/ForgotPassword`,config)
            dispatch({
                type:SEND_RECOVERY_EMAIL
            })
            
        }catch(err){
            dispatch({
                type:SEND_OTP_FAIL,
                payload://error if password recovery fails
                "Check email"
            })
        }
    }

    const showModal = (text)=>{
        dispatch({
            type:SHOW_FORGOTTEN_PASSWORD,
            payload:text
        })
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
            showForgotModal:state.showForgotModal,
            recovery:state.recovery,
            logout,
            register,
            login,
            loadUser,
            sendOtp,
            showModal,
            sendRecoveryEmail
        }}>
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState
