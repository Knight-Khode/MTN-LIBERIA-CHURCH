import React,{Fragment,useContext,useState,useEffect} from 'react'
import AuthContext from '../../context/auth/authContext'
import '../../signup.css'
import { Link,withRouter } from 'react-router-dom'
import Navbar from '../reuseables/Navbar'

const Login = (props) => {
    const authContext = useContext(AuthContext)
    const {login} = authContext
    
    useEffect(()=>{
        props.history.push('/otp')
    },[props.history])

    const [user,setUser] = useState({
        username:'',
        password:''
    })

    const {username,password} = user

    const onChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        if(username===''|| password ===''){
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
                                <input type="password" name="password" placeholder="Password" value={password} onChange={onChange}/>
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

export default withRouter(Login)
