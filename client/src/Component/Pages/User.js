import React from 'react'
import UserNavbar from '../Layout/userLayout/UserNavbar'
import UserShowcase from '../Layout/userLayout/UserShowcase'
import UserSideBar from '../Layout/userLayout/UserSideBar'
import Branches from '../Layout/userLayout/Branches'
import UserPayment from '../Layout/userLayout/UserPayment'

const User = () => {
    return (
        <div>
            <UserNavbar/>
            <UserShowcase/>
            <div className="userbody">
                <div className="userbody-flex">
                    <UserSideBar/>
                    <Branches/>
                    <UserPayment/>
                </div>
            </div>
        </div>
    )
}

export default User
