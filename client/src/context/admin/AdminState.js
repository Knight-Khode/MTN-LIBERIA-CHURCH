import React,{useReducer} from 'react'
import adminContext from './adminContext'
import adminReducer from './adminReducer'
import {
    VIEW_PAYMENT,
    VIEW_USERS,
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGIN_SUCCESS,
    ADD_EVENTS_FAIL,
    LOGOUT,
    baseUrl
} from '../types'

const AdminState = (props) => {
    const initialState={
        defaultClass:"hide",
        viewUsers:"hide",
        isAuthenticated2:null,
        error:null
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

     //Login Admin
     const adminLogin = async (formData)=>{
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }

        try{
            //api call to login admin is made here
            //const res = await axios.post('api route goes here',formData,config)
           
            dispatch({
                type:ADMIN_LOGIN_SUCCESS
            })
            
        }catch(err){
            dispatch({
                type:ADMIN_LOGIN_FAIL,
                payload://error incase login deatails are wrong goes here, would be using dummy error for now
                "Check login credentials"
            })
        }
    }

    //add events
    const addEvents = async (newEvent)=>{
        console.log(newEvent)
        const config={
            mode:'cors',
            method:'POST',
            cache:'no-cache',
            headers:{
                'Authorization':'Access',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newEvent)
        }

        try{
            // const res = await axios.post("http://localhost:5000/api/auth/register",formData,config)
            const res = await fetch(`${baseUrl}/api/auth/AddUpcomingEvent`,config);
            var responseData = await res.json();

            console.log('resp data', responseData)
        }catch(err){
            console.error('API Error', err)
            dispatch({
                type:ADD_EVENTS_FAIL,
                payload://Error message from backend just incase an input field was empty
                //for now we are hard coding an error:
                "Check all your input fields"
            })
        }
    }

    //Logout Admin
    const logout = ()=>{
        dispatch({
            type:LOGOUT
        })
    }

    return (
        <adminContext.Provider value={{
            defaultClass:state.defaultClass,
            viewUsers:state.viewUsers,
            isAuthenticated2:state.isAuthenticated2,
            error:state.error,
            changeClass,
            changeClass2,
            adminLogin,
            logout,
            addEvents
        }}>
            {props.children}
        </adminContext.Provider>
    )
}

export default AdminState
