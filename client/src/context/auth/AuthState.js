import React,{useReducer} from 'react'
import axios from 'axios'
import authContext from './authContext'
import authReducer from './authReducer'
import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_USER
}from '../types'

const AuthState = (props) => {
    const initialState={
        isAuthenticated:null,
        user:null,
        error:null
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
            logout,
            register,
            login
        }}>
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState
