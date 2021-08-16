import React,{useContext,useState} from 'react'
import UserContext from '../../../context/user/userContext'

const PaymentModal = () => {
    const userContext = useContext(UserContext)
    const {showModal,modal,registerPayment} = userContext
    const [payment,setPayment] = useState({
        number:"",
        amount:"",
        paymentType:"tithe"
    })

    const options = [
        {
          label: "Tithe",
          value: "tithe",
        },
        {
          label: "Offering",
          value: "offering",
        },
        {
          label: "Donation",
          value: "donation",
        }
      ];

    const show = (e)=>{
        e.preventDefault()
        modal("hide2")
    }

    const {number,amount,paymentType} = payment
    const onChange = (e)=>{
        setPayment({
            ...payment,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit =(e)=>{
        e.preventDefault()
        registerPayment(payment)
    }

    return (
        <div className={`modal ${showModal}`}>
            <div className="modal-content">
                <span className="close" onClick={show}>
                    &times;
                </span>
                <form className="modal-form" onSubmit={onSubmit}>
                    <div className="payment-form">
                        <label>Select payment type</label>
                        <select name="paymentType" value={paymentType} onChange={onChange}>
                            {options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="payment-form">
                        <label>Enter Number</label>
                        <input type="text" name="number" value={number} onChange={onChange}/>
                    </div>
                    <div className="payment-form">
                        <label>Enter Amount</label>
                        <input type="text" className="amount" name="amount" value={amount} onChange={onChange}/>
                    </div>
                    <div className="payment-form btn">
                        <button type="submit">Pay</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PaymentModal
