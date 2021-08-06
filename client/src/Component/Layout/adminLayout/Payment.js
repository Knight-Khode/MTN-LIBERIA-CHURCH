import React,{useContext} from 'react'
import AdminContext from '../../../context/admin/adminContext'

const Payment = () => {
    const adminContext = useContext(AdminContext)
    const {defaultClass} = adminContext

    return (
        <div className={`payment ${defaultClass}`}>
            <div className="payment-header">
                <i class="fas fa-money-bill-wave"></i>
                <p>Payment Log</p>
            </div>
            <div className="payment-body">
                <ul className="table-head">
                    <li>User</li>
                    <li className="dis">Payment Type</li>
                    <li className="dis">Branch</li>
                    <li>Amount</li>
                    <li>Date</li>
                </ul>
                <ul className="table-content">
                    <div className="table-content-list">
                        <li>Kofi Boateng</li>
                        <li className="dis">Church Offering</li>
                        <li className="dis">Osu Branch</li>
                        <li>100</li>
                        <li>5/08/2021</li>
                    </div>
                    <div className="table-content-list">
                        <li>Kwaku Frimong</li>
                        <li className="dis">Donation</li>
                        <li className="dis">Circle Branch</li>
                        <li>100</li>
                        <li>5/08/2021</li>
                    </div>
                    <div className="table-content-list">
                        <li>Kofi Boateng</li>
                        <li className="dis">Church Offering</li>
                        <li className="dis">Osu Branch</li>
                        <li>100</li>
                        <li>5/08/2021</li>
                    </div>
                    <div className="table-content-list">
                        <li>Kofi Boateng</li>
                        <li className="dis">Church Offering</li>
                        <li className="dis">Osu Branch</li>
                        <li>100</li>
                        <li>5/08/2021</li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Payment
