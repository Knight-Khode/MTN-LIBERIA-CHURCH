import React,{useContext} from 'react'
import AdminContext from '../../context/admin/adminContext'
import { Route,Redirect } from 'react-router'

const PrivateRoute = ({component:Component,...rest}) => {
    const adminContext = useContext(AdminContext)
    const {isAuthenticated2} = adminContext
    return (
        <Route {...rest} render={props=> !isAuthenticated2 ? (
            <Redirect to='/adminLogin'/>
        ):(
            <Component {...props}/>
        )}/>     
    )
}

export default PrivateRoute
