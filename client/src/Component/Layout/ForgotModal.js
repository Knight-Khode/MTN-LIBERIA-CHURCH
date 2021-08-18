import React,{useContext,useState,useEffect} from 'react'
import { withRouter } from 'react-router'
import AuthContext from '../../context/auth/authContext'
import '../../user.css'

const ForgotModal = (props) => {
    const authContext = useContext(AuthContext)
    const {showModal,showForgotModal,recovery,sendRecoveryEmail} = authContext

    useEffect(()=>{
        if(recovery){
            props.history.push('/forgot')
        }
    },[recovery,props.hsitory])

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
        }else{
            sendRecoveryEmail(forgot)
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

export default withRouter(ForgotModal)
