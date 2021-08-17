import React,{Fragment,useState,useContext,useEffect} from 'react'
import AuthContext from '../../context/auth/authContext'
import { Link } from 'react-router-dom'
import Navbar from '../reuseables/Navbar'
import '../../signup.css'

const Signup = (props) => {
    const authContext = useContext(AuthContext)
    const {register,signUp} = authContext

    useEffect(()=>{
        if(signUp){
            props.history.push('/otp')
        }
    },[signUp,props.history])

    const [user,setUser] = useState({
        fullName:'',
        username:'',
        email:'',
        password:'',
        password2:'',
        number:''
    })

    const {fullName,username,email,password,password2,number} = user

    const onChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        if(fullName==='' || username ==='' || password2 === '' || email === '' || password === '' || number === ''){
            //setAlert('Please enter all fields','danger')
        }else if(password !== password2){
            //setAlert('Passwords do not match','danger')
        }else{
            register({
                fullName,
                email,
                username,
                number,
                password
            })
            setUser({
                fullName:'',
                username:'',
                email:'',
                password:'',
                password2:'',
                number:''
            })
        }  
    }

    return (
        <Fragment>
            <Navbar/>
            <div className="signup">
                <div className="signup-content">
                    <div className="sign-up-left">
                        <form className="sign-up-form" onSubmit={onSubmit}>
                            <div className="sign-up-form-head">
                                <h1>Sign Up</h1>
                                <i className="fas fa-user-plus"></i>
                            </div>
                            <div className="sign-up-form-group">
                                <input type="text" name="fullName" placeholder="Full name" value={fullName} onChange={onChange}/>
                            </div>
                            <div className="sign-up-form-group">
                                <input type="text" name="username" placeholder="Username" value={username} onChange={onChange}/>
                            </div>
                            <div className="sign-up-form-group">
                                <input type="email" name="email" placeholder="E-mail" value={email} onChange={onChange}/>
                            </div>
                            <div className="sign-up-form-group">
                                <input type="text" name="number" placeholder="Number" value={number} onChange={onChange}/>
                            </div>
                            <div className="sign-up-form-group">
                                <input type="password" name="password" placeholder="Password" value={password} onChange={onChange}/>
                            </div>
                            <div className="sign-up-form-group">
                                <input type="password" name="password2" placeholder="Confirm Password" value={password2} onChange={onChange}/>
                            </div>
                            <div className="Sign-up-info">
                                <Link to="/login">
                                    <a className="check">Already have an Account? Login</a>
                                </Link>
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
