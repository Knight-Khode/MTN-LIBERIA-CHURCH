import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../../context/user/userContext'

const UserSideBar = () => {
    const userContext = useContext(UserContext)
    const {showBranch,showBranches} = userContext

    const viewBranches = (e)=>{
        e.preventDefault()
        if(showBranches==="hide2"){
            showBranch('show2')
        }else{
            showBranch('hide2')
        }
    }

    return (
        <div className="user-side-bar">
           <div className="user-side-bar-header">
                <div className="user-side-bar-header-content">
                    <h4>Hello Kwame!</h4>
                    <i class="fas fa-home"></i>
                </div>
           </div>
           <div className="user-side-bar-body">
                <ul>
                    <li>
                        <i class="fas fa-church"></i>
                        <a href="#" onClick={viewBranches}>Choose Branch</a>
                    </li>
                    <li>
                        <i class="fas fa-money-check-alt"></i>
                        <a href="#">Make Payment</a>
                    </li>
                    <li>
                        <i class="fas fa-home"></i>
                        <Link className="userHome" to="/">
                            <a href="#">Home</a>                           
                        </Link>
                    </li>
                    <li>
                        <i class="fas fa-sign-out-alt"></i>
                        <a href="#">Logout</a>
                    </li>
                </ul>
           </div>
        </div>
    )
}

export default UserSideBar
