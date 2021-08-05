import React,{Fragment} from 'react'
import '../../signup.css'
import { Link } from 'react-router-dom'
import Navbar from '../reuseables/Navbar'

const Login = () => {
    return (
        <Fragment>
            <Navbar/>
            <div className="signup">
                <div className="signup-content login">
                    <div className="sign-up-left">
                        <form className="sign-up-form">
                            <div className="sign-up-form-head">
                                <h1>Sign Up</h1>
                                <i className="fas fa-user-plus"></i>
                            </div>
                            <div className="sign-up-form-group">
                                <input type="text" name="username" placeholder="Username"/>
                            </div>                                                  
                            <div className="sign-up-form-group">
                                <input type="password" name="password" placeholder="Password"/>
                            </div>
                            <div className="Sign-up-info">
                                <Link to="/signup">
                                    <a className="check">Do not have an Account? Signup</a>
                                </Link>
                            </div>                          
                            <div className="sign-up-btn">
                                <button type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="sign-up-right back2"></div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login
