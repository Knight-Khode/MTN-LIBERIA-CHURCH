import React,{useContext} from 'react'
import AuthContext from '../../context/auth/authContext'
import { Route,Redirect } from 'react-router'

const PrivateRoute2 = ({component:Component,...rest}) => {
    const adminContext = useContext(AuthContext)
    const {isAuthenticated} = adminContext
    return (
        <Route {...rest} render={props=> !isAuthenticated ? (
            <Redirect to='/login'/>
        ):(
            <Component {...props}/>
        )}/> 
    )
}

export default PrivateRoute2
