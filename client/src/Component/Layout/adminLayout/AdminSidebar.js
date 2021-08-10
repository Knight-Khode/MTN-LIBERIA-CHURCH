import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import AdminContext from '../../../context/admin/adminContext'

const AdminSidebar = () => {
    const adminContext = useContext(AdminContext)
    const {changeClass,defaultClass,viewUsers,changeClass2,logout} = adminContext

    const viewPayment = (e)=>{
        e.preventDefault()
        if(defaultClass==="hide"){
            changeClass('show')
        }else{
            changeClass('hide')
        }
    }

    const viewUsers2 = (e)=>{
        e.preventDefault()
        if(viewUsers==="hide"){
            changeClass2('show')
        }else{
            changeClass2("hide")
        }
    }

    const logOutAdmin = (e)=>{
        e.preventDefault()
        logout()
    }

    return (
        <div className="adminSidebar">
            <div className="side-header">
                <i class="fas fa-users-cog"></i>
                <h2>Welcome Admin!</h2>
            </div>
            <ul className="side-body">
                <li>
                    <i class="fas fa-users"></i>
                    <a href="#" className="log-out-btn" onClick={viewUsers2}>
                        <p>View users</p>
                    </a>
                </li>
                <li>                    
                    <i class="fas fa-money-bill-wave"></i>
                    <a href="#" className="log-out-btn" onClick={viewPayment}>
                        <p>View Payments</p>
                    </a>
                </li>
                <li>
                    <i class="fas fa-home"></i>
                    <Link to="/" className="log-out-btn">
                        <p>Home Page</p>
                    </Link>
                </li>
                <li>
                    <i class="fas fa-sign-out-alt"></i>
                    <a href="#" className="log-out-btn" onClick={logOutAdmin}>
                        <p>Log Out</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default AdminSidebar
