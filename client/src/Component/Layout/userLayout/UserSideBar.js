import React from 'react'

const UserSideBar = () => {
    return (
        <div className="user-side-bar">
           <div className="user-side-bar-header">
                <div className="user-side-bar-header-content">
                    <h4>Hello Kwame!</h4>
                    <i class="fas fa-home"></i>
                </div>
           </div>
           <div className="user-side-bar-body">
                <ul>
                    <li>
                        <i class="fas fa-church"></i>
                        <a href="#">Choose Branch</a>
                    </li>
                    <li>
                        <i class="fas fa-money-check-alt"></i>
                        <a href="#">Make Payment</a>
                    </li>
                    <li>
                        <i class="fas fa-sign-out-alt"></i>
                        <a href="#">Logout</a>
                    </li>
                </ul>
           </div>
        </div>
    )
}

export default UserSideBar
