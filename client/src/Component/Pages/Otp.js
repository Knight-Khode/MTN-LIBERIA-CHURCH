import React,{useState,useContext,useEffect} from 'react'
import '../../otp.css'
import otp from '../../img/otp.jpg'
import Navbar from '../reuseables/Navbar'
import AuthContext from '../../context/auth/authContext'
import { withRouter } from 'react-router'

const Otp = (props) => {
    const authContext = useContext(AuthContext)
    const {isAuthenticated,sendOtp} = authContext

    useEffect(()=>{
        if(isAuthenticated){
            props.history.push('/')
        }
    },[isAuthenticated,props.history])

    const [otpInput,setOtp] = useState({
        otp1:'',
        otp2:'',
        otp3:'',
        otp4:'',
        otp5:'',
        otp6:''
    })

    const {otp1,otp2,otp3,otp4,otp5,otp6} = otpInput

    const onChange = (e)=>{
        setOtp({
            ...otpInput,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        let digits = Object.values(otpInput)
        let otpDigits = ''
        digits.forEach(val=>{
            otpDigits += val
        })
        if(otp1==="" || otp2==="" || otp3==="" || otp4===""|| otp5==="" || otp6===""){
            alert("fill all input fields")
        }else{
            sendOtp(otpDigits)
        } 
    }

    return (
        <>
            <Navbar/>
            <div className="otp">
                <div className="otp-content">
                    <div className="otp-left">
                        <img src={otp} alt="img"/>
                    </div>
                    <div className="otp-right">
                        <h3>Enter OTP Digits</h3>
                        <form className="otp-form" onSubmit={onSubmit}>
                            <div className="otp-input">
                                <div className="otp-form-group">
                                    <input type="text" maxLength="1" name="otp1" value={otp1} onChange={onChange}/>
                                </div>
                                <div className="otp-form-group">
                                    <input type="text" maxLength="1" name="otp2" value={otp2} onChange={onChange}/>
                                </div>
                                <div className="otp-form-group">
                                    <input type="text" maxLength="1" name="otp3" value={otp3} onChange={onChange}/>
                                </div>
                                <div className="otp-form-group">
                                    <input type="text" maxLength="1" name="otp4" value={otp4} onChange={onChange}/>
                                </div>
                                <div className="otp-form-group">
                                    <input type="text" maxLength="1" name="otp5" value={otp5} onChange={onChange}/>
                                </div>
                                <div className="otp-form-group">
                                    <input type="text" maxLength="1" name="otp6" value={otp6} onChange={onChange}/>
                                </div>
                            </div>
                            <div className="otp-form-group otp-btn">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(Otp)
