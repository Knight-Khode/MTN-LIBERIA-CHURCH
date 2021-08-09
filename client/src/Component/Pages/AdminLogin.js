import React,{Fragment,useState,useContext} from 'react'
import AdminContext from '../../context/admin/adminContext'
import Navbar from '../reuseables/Navbar'

const AdminLogin = () => {
    const adminContext = useContext(AdminContext)
    const {adminLogin} = adminContext

    const [admin,setAdmin] = useState({
        username:'',
        password:''
    })

    const {username,password} = admin

    const onChange=(e)=>{
        setAdmin({
            ...admin,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        if(username===''|| password ===''){
            //setAlert('Please fill in all fields','danger')
        }else{
            adminLogin(admin)
            setAdmin({
                username:'',
                password:''
            })
        }
    }

    return (
        <Fragment>
            <Navbar/>
            <div className="signup adminLogin">
                <div className="signup-content login">
                    <div className="sign-up-left">
                        <form className="sign-up-form" onSubmit={onSubmit}>
                            <div className="sign-up-form-head">
                                <h2>Admin Login</h2>
                                <i className="fas fa-user-plus"></i>
                            </div>
                            <div className="sign-up-form-group">
                                <input type="text" name="username" placeholder="Username" value={username} onChange={onChange}/>
                            </div>                                                  
                            <div className="sign-up-form-group">
                                <input type="password" name="password" placeholder="Password" value={password} onChange={onChange}/>
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
