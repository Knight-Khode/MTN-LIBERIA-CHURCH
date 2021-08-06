import React,{Fragment} from 'react'
import Navbar from '../reuseables/Navbar'

const AdminLogin = () => {
    return (
        <Fragment>
            <Navbar/>
            <div className="signup adminLogin">
                <div className="signup-content login">
                    <div className="sign-up-left">
                        <form className="sign-up-form">
                            <div className="sign-up-form-head">
                                <h2>Admin Login</h2>
                                <i className="fas fa-user-plus"></i>
                            </div>
                            <div className="sign-up-form-group">
                                <input type="text" name="username" placeholder="Username"/>
                            </div>                                                  
                            <div className="sign-up-form-group">
                                <input type="password" name="password" placeholder="Password"/>
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

export default AdminLogin
