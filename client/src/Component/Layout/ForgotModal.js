import React,{useContext,useState} from 'react'
import AuthContext from '../../context/auth/authContext'
import '../../user.css'

const ForgotModal = () => {
    const authContext = useContext(AuthContext)
    const {showModal,showForgotModal} = authContext
    const [forgot,setForgot] = useState({
        email:""
    })

    const onClick = ()=>{
        if(showForgotModal==="hide2"){
            showModal("show2")
        }else{
            showModal("hide2")
        }
    }

    const {email} = forgot
    const onChange = (e)=>{
        setForgot({
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        if(email === ""){
            alert('Enter email')
        }
    }

    return (
        <div className={`modal ${showForgotModal}`}>
            <div className="modal-content">
                <span className="close" onClick={onClick}>
                    &times;
                </span>
                <h3>Password Recovery</h3>
                <form className="modal-form" onSubmit={onSubmit}>
                    <div className="payment-form">
                        <input type="text" placeholder="Enter email" name="email" value={email} onChange={onChange}/>
                    </div>
                    <div className="forgot-btn">
                        <button type="submit">
                            Recover
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotModal
