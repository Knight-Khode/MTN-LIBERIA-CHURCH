import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-content">
                <div className="nav-logo">
                    logo
                </div>
                <div className="nav-links">
                    <Link to="/" className="nav-margin">
                        <a>Home</a>
                    </Link>
                    <div className="dropdown">
                        <button className="dropbtn">Login
                        </button>
                        <div className="dropdown-content">
                            <Link to='/user'>
                                <a>Subscriber</a>
                            </Link>
                            <Link to='/admin'>
                                <a>Admin</a>
                            </Link>
                        </div>
                    </div>
                    <Link to="/signup" className="nav-margin">
                        <a>Signup</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
