import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../img/logo.jpeg'
import '../../../user.css'

const UserNavbar = () => {
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
                       <a href="#">
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
