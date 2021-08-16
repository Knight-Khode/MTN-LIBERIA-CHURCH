import React,{useContext} from 'react'
import AuthContext from '../../../context/auth/authContext'
import { Link } from 'react-router-dom'
import logo from '../../../img/logo.jpeg'
import '../../../user.css'

const UserNavbar = () => {
    const authContext = useContext(AuthContext)
    const {logout} = authContext
    const onLogout = (e)=>{
        e.preventDefault()
        logout()
    }

    return (
        <nav className="user-nav">
           <div className="user-container">
                <div className="logo">
                    <img src={logo} alt="img"/>
                </div>
                <ul>
                    <li>
                        <Link to='/'>
                            <a href="#">Home</a>
                        </Link>
                    </li>
                    <li>
                        <a href="#">Hello Kwame</a>
                    </li>
                    <li>
                       <a href="#" onClick={onLogout}>
                           Logout
                           <i class="fas fa-sign-out-alt"></i>
                       </a>
                    </li>
                </ul>
           </div>
        </nav>
    )
}

export default UserNavbar
