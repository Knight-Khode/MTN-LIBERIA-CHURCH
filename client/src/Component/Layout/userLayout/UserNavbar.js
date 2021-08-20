import React,{useContext} from 'react'
import AuthContext from '../../../context/auth/authContext'
import UserContext from '../../../context/user/userContext'
import { Link } from 'react-router-dom'
import { Link as Link2 } from 'react-scroll'
import logo from '../../../img/logo.jpeg'
import '../../../user.css'

const UserNavbar = () => {
    const authContext = useContext(AuthContext)
    const userContext = useContext(UserContext)
    const {showSideBar,showSideBarClass,showPayment,showPayments} = userContext
    const {logout} = authContext

    const payment = (e) =>{
        e.preventDefault()
        if(showPayments==="hide2"){
            showPayment("show2")
        }else{
            showPayment("hide2")
        }
    }

    const church = (e)=>{
        e.preventDefault()
        if(showSideBarClass === "hide2"){
            showSideBar('show2')
        }else{
            showSideBar('hide2')
        }
    }

    const onLogout = (e)=>{
        e.preventDefault()
        logout()
    }

    return (
        <nav className="user-nav">
            <div className="user-container">
                <div className="nav-logo">
                    <img src={logo}/>
                </div>
                <div className="nav-links">
                    <Link to="/" className="nav-margin">
                        Home
                    </Link>
                    <div className="dropdown">
                        <button className="dropbtn">View
                        </button>
                        <div className="dropdown-content">
                            <Link2 to ="church" spy={true} smooth={true}>
                                <a href="#church" onClick={church}>Churches</a>
                            </Link2>
                            <Link2 to ="payment" spy={true} smooth={true}>
                                <a href="#payment" onClick={payment}>Payments</a>
                            </Link2>
                            <a href="#" onClick={onLogout}>Logout</a>
                        </div>
                    </div>
                    <p>Hello Kwame</p>
                </div>
            </div>
        </nav>
    )
}

export default UserNavbar
