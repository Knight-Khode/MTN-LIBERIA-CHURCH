import React,{useContext} from 'react'
import AuthContext from '../../../context/auth/authContext'
import UserContext from '../../../context/user/userContext'
import { Link } from 'react-router-dom'
import logo from '../../../img/logo.jpeg'
import '../../../user.css'

const UserNavbar = () => {
    const authContext = useContext(AuthContext)
    const userContext = useContext(UserContext)
    const {showSideBar,showSideBarClass} = userContext
    const {logout} = authContext

    const church = (e)=>{
        e.preventDefault()
        if(showSideBarClass === "hide2"){
            showSideBar('show2')
        }else{
            showSideBar('hide2')
        }
    }

    const onLogout = (e)=>{
        e.preventDefault()
        logout()
    }

    return (
        <nav className="user-nav">
            <div className="user-container">
                <div className="nav-logo">
                    <img src={logo}/>
                </div>
                <div className="nav-links">
                    <Link to="/" className="nav-margin">
                        Home
                    </Link>
                    <div className="dropdown">
                        <button className="dropbtn">View
                        </button>
                        <div className="dropdown-content">
                            <a href="#church" onClick={church}>Churches</a>
                            <a href="#payment">Payments</a>
                            <a href="#" onClick={onLogout}>Logout</a>
                        </div>
                    </div>
                    <p>Hello Kwame</p>
                </div>
            </div>
        </nav>
    )
}

export default UserNavbar
