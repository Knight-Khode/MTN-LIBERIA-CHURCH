import React from 'react'

const ForgotModal = () => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close">
                    &times;
                </span>
                <h3>Password Recovery</h3>
                <form className="modal-form">
                    <div className="payment-form">
                        <input type="text" placeholder="Enter email"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotModal
