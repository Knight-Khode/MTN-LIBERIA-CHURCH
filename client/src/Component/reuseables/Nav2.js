import React from 'react'
import "../../nav2.css"

const Nav2 = () => {
    return (
        <nav className="nav2">
            <div className="nav2-container">
                <ul>
                    <li>
                        <a href="#">View users</a>
                    </li>
                    <li>
                        <a href="#">Payment</a>
                    </li>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav2
