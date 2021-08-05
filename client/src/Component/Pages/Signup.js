import React,{Fragment} from 'react'
import Navbar from '../reuseables/Navbar'
import '../../signup.css'

const Signup = () => {
    return (
        <Fragment>
            <Navbar/>
            <div className="signup">
                <div className="signup-content">
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
                                <input type="email" name="email" placeholder="E-mail"/>
                            </div>
                            <div className="sign-up-form-group">
                                <input type="text" name="number" placeholder="Number"/>
                            </div>
                            <div className="sign-up-form-group">
                                <input type="password" name="password" placeholder="Password"/>
                            </div>
                            <div className="sign-up-form-group">
                                <input type="password" name="password2" placeholder="Confirm Password"/>
                            </div>
                            <div className="sign-up-btn">
                                <button type="submit">Sign Up</button>
                            </div>
                        </form>
                    </div>
                    <div className="sign-up-right"></div>
                </div>
            </div>
        </Fragment>
    )
}

export default Signup
