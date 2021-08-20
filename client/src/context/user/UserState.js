import React,{useReducer} from 'react'
import axios from 'axios'
import userContext from './userContext'
import userReducer from './userReducer'
import {
    SHOW_BRANCHES,
    SHOW_BRANCHES_FAILED,
    SHOW_PAYMENT,
    SHOW_MODAL,
    SHOW_USER_SIDEBAR,
    PAYMENT,
    PAYMENT_FAIL,
    GET_EVENTS,
    GET_CHURCH_BRANCHES,
    baseUrl
}from '../types'

const UserState = (props) => {
    const initialState={
        showBranches:"hide2",
        showPayments:"hide2",
        showModal:"hide2",
        showSideBarClass:"hide2",
        isPaid:false,
        events:null,
        chruchBranches:null
    }

    const [state,dispatch]=useReducer(userReducer,initialState)

    const getChurchBranch = async()=>{
        const config={
            mode:'cors',
            method:'GET',
            cache:'no-cache',
            headers:{
                'Authorization':'Access',
                'Content-Type' : 'application/json'
            }
        }
        try{
            const res = await fetch(`${baseUrl}/api/church/getchurches`,config);
            var responseData = await res.json();

            console.log('resp data', responseData)
            dispatch({
                type:GET_CHURCH_BRANCHES,
                payload:responseData
            })
        }catch(err){
            console.error('API Error', err)
            dispatch({
                type:SHOW_BRANCHES_FAILED,
                payload:"failed to load data"
            })
        }
    }

    //Dont touch this it is for styling purposes
    const showBranch= async (text)=>{
        dispatch({
            type:SHOW_BRANCHES,
            payload:text
        })
    }
    const showSideBar = (text) =>{
        dispatch({
            type:SHOW_USER_SIDEBAR,
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

    const getEvents = async()=>{
        try{
            //sending GET api call to backend to get all events
            //const res = await axios.get('route goes here')
            dispatch({
                type:GET_EVENTS,
                //payload:res.data
            })
        }catch(err){
            dispatch({
                payload:"could not get events from backend"
            })
        }
    }

    return (
        <userContext.Provider value={{
            showBranches:state.showBranches,
            showPayments:state.showPayments,
            showModal:state.showModal,
            showSideBarClass:state.showSideBarClass,
            isPaid:state.isPaid,
            events:state.events,
            chruchBranches:state.chruchBranches,
            showBranch,
            showPayment,
            modal,
            registerPayment,
            getEvents,
            showSideBar,
            getChurchBranch
        }}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState
