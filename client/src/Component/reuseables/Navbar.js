import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../../img/logo.jpeg"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-content">
                <div className="nav-logo">
                    <img src={logo}/>
                </div>
                <div className="nav-links">
                    <Link to="/" className="nav-margin">
                        Home
                    </Link>
                    <div className="dropdown">
                        <button className="dropbtn">Login
                        </button>
                        <div className="dropdown-content">
                            <Link to='/login'>
                                Subscriber
                            </Link>
                            <Link to='/adminLogin'>
                                Admin
                            </Link>
                        </div>
                    </div>
                    <Link to="/signup" className="nav-margin">
                        Signup
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
