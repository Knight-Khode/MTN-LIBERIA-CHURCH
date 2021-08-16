import React from 'react'
import UserNavbar from '../Layout/userLayout/UserNavbar'
import UserShowcase from '../Layout/userLayout/UserShowcase'
import UserSideBar from '../Layout/userLayout/UserSideBar'
import Branches from '../Layout/userLayout/Branches'
import UserPayment from '../Layout/userLayout/UserPayment'
import PaymentModal from '../Layout/userLayout/PaymentModal'
import UserQuotation from '../Layout/userLayout/UserQuotation'
import UserVideo from '../Layout/userLayout/UserVideo'

const User = () => {
    return (
        <div>
            <UserNavbar/>
            <UserShowcase/>
            <div className="userbody">
                <div className="userbody-flex">
                    <UserSideBar/>
                   <div className="body-flex">
                    <Branches/>
                    <UserPayment/>
                    <PaymentModal/>
                    <UserVideo/>
                   </div>
                </div>
                <UserQuotation/>
            </div>
        </div>
    )
}

export default User
