import React from 'react'
import UserNavbar from '../Layout/userLayout/UserNavbar'
import UserShowcase from '../Layout/userLayout/UserShowcase'
import UserSideBar from '../Layout/userLayout/UserSideBar'

const User = () => {
    return (
        <div>
            <UserNavbar/>
            <UserShowcase/>
            <div className="userbody">
                <div className="userbody-flex">
                    <UserSideBar/>
                </div>
            </div>
        </div>
    )
}

export default User
