import React,{useReducer} from 'react'
import adminContext from './adminContext'
import adminReducer from './adminReducer'
import {
    VIEW_PAYMENT,
    VIEW_USERS,
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGIN_SUCCESS
} from '../types'

const AdminState = (props) => {
    const initialState={
        defaultClass:"hide",
        viewUsers:"hide",
        isAuthenticated:null,
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

     //Login User
     const adminLogin = async (formData)=>{
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }

        try{
            //api call to login admin is made here
            //const res = await axios.post('api route goes here',formData,config)
            console.log(formData)
            dispatch({
                type:ADMIN_LOGIN_SUCCESS
            })

            //loadUser()
            
        }catch(err){
            dispatch({
                type:ADMIN_LOGIN_FAIL,
                payload://error incase login deatails are wrong goes here, would be using dummy error for now
                "Check login credentials"
            })
        }
    }

    return (
        <adminContext.Provider value={{
            defaultClass:state.defaultClass,
            viewUsers:state.viewUsers,
            isAuthenticated:state.isAuthenticated,
            error:state.error,
            changeClass,
            changeClass2,
            adminLogin
        }}>
            {props.children}
        </adminContext.Provider>
    )
}

export default AdminState
