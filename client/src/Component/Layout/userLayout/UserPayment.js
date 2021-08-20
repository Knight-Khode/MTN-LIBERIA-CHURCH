import React,{useContext} from 'react'
import UserContext from '../../../context/user/userContext'

const UserPayment = () => {
    const userContext = useContext(UserContext)
    const {showPayments,showModal,modal} = userContext

    const onSubmit = (e)=>{
        e.preventDefault()
        if(showModal==="hide2"){
            modal("show2")
        }
    }
    
    return (
        <div className={`user-payment ${showPayments}`} id="payment">
            <div className="user-payment-header">
                <div className="user-payment-header-content">
                    <h4>Payments</h4>
                    <i class="fas fa-money-check-alt"></i>
                </div>
            </div>
            <div className="user-payment-body">
                <ul>
                    <li className="payment-info">
                        <div className="top-content top2">
                            <i class="fas fa-paper-plane"></i>
                            <p>Select Payment Type</p>
                        </div>
                        <div className="bottom-content">
                            <div className="bottom-content-control">
                                <i class="fas fa-arrow-right"></i>
                                <p>Offering</p>
                            </div>
                            <div className="bottom-content-control">
                                <i class="fas fa-arrow-right"></i>
                                <p>Donation</p>
                            </div>
                            <div className="bottom-content-control">
                                <i class="fas fa-arrow-right"></i>
                                <p>Tithe</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="top-content">
                            <i class="fas fa-paper-plane"></i>
                            <p>Enter MOMO number</p>
                        </div>  
                    </li>
                    <li>
                        <div className="top-content">
                            <i class="fas fa-paper-plane"></i>
                            <p>Enter amount</p>
                        </div>
                    </li>
                    <li>
                        <div className="top-content">
                            <i class="fas fa-paper-plane"></i>
                            <p>Click pay button</p>
                        </div>
                    </li>
                </ul>
                <div className="pay-form-btn">
                    <button type="submit" onClick={onSubmit}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default UserPayment
