import React,{Fragment,useContext,useState,useEffect} from 'react'
import AuthContext from '../../context/auth/authContext'
import '../../signup.css'
import { Link,withRouter } from 'react-router-dom'
import Navbar from '../reuseables/Navbar'
import ForgotModal from '../Layout/ForgotModal'

const Login = (props) => {
    const authContext = useContext(AuthContext)
    const {login,loggedIn,showModal,showForgotModal} = authContext
    
    useEffect(()=>{
        if(loggedIn){
            props.history.push('/otp')
        }
    },[loggedIn,props.history])

    const [user,setUser] = useState({
        username:'',
        password:'',
        number:''
    })

    const onClick=()=>{
        if(showForgotModal==="hide2"){
            showModal('show2')
        }else{
            showModal('hide2')
        }
    }

    const {username,password,number} = user

    const onChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        if(username===''|| password ===''|| number ===''){
            //setAlert('Please fill in all fields','danger')
        }else{
            login(user)
        }
    }

    return (
        <Fragment>
            <Navbar/>
            <div className="signup userLogin">
                <div className="signup-content login">
                    <div className="sign-up-left">
                        <form className="sign-up-form" onSubmit={onSubmit}>
                            <div className="sign-up-form-head">
                                <h1>Log In</h1>
                                <i className="fas fa-user-plus"></i>
                            </div>
                            <div className="sign-up-form-group">
                                <input type="text" name="username" placeholder="Username" value={username} onChange={onChange}/>
                            </div>
                            <div className="sign-up-form-group">
                                <input type="text" name="number" placeholder="number" value={number} onChange={onChange}/>
                            </div>                                                   
                            <div className="sign-up-form-group">
                                <input type="password" name="password" placeholder="Password" value={password} onChange={onChange}/>
                            </div>
                            <div className="Sign-up-info">
                                <Link to="/signup">
                                    <a className="check">Do not have an Account? Signup</a>
                                </Link>
                                <div className="forgotten">
                                    <a href="#" className="check" onClick={onClick}>Forgotten password?</a>
                                </div>
                            </div>                          
                            <div className="sign-up-btn">
                                <button type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="sign-up-right back2"></div>
                </div>
            </div>
            <ForgotModal/>
        </Fragment>
    )
}

export default withRouter(Login)
