import React from 'react'
import UserNavbar from '../Layout/userLayout/UserNavbar'
import UserShowcase from '../Layout/userLayout/UserShowcase'
import UserSideBar from '../Layout/userLayout/UserSideBar'
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
                   <div className="body-flex" id="payment">
                        <UserVideo/>
                        <UserQuotation/>
                        <UserPayment/>
                        <PaymentModal/>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default User
