import React,{useContext} from 'react'
import UserContext from '../../../context/user/userContext'
import AuthContext from '../../../context/auth/authContext'

const UserSideBar = () => {
    const userContext = useContext(UserContext)
    const authContext = useContext(AuthContext)
    const {showBranch,showBranches,showPayment,showPayments,showSideBar,showSideBarClass} = userContext

    const viewBranches = (e)=>{
        e.preventDefault()
        if(showBranches==="hide2"){
            showBranch('show2')
        }else{
            showBranch('hide2')
        }
    }

    const viewPayments = (e)=>{
        e.preventDefault()
        if(showPayments==="hide2"){
            showPayment('show2')
        }else{
            showPayment('hide2')
        }
    }

    return (
        <div className={`user-side-bar ${showSideBarClass}`}>
           <div className="user-side-bar-header">
                <div className="user-side-bar-header-content">
                    <h4>Churches</h4>
                    <i class="fas fa-home"></i>
                </div>
           </div>
           <div className="user-side-bar-body">
                <ul>
                    <li>
                        <i class="fas fa-church"></i>
                        <a href="#">Church Name 1</a>
                    </li>
                    <li>
                        <i class="fas fa-church"></i>
                        <a href="#">Church Name 2</a>
                    </li>
                    <li>
                        <i class="fas fa-church"></i>
                        <a href="#">Church Name 3</a>                          
                    </li>
                    <li>
                        <i class="fas fa-church"></i>
                        <a href="#">Church Name 4</a>
                    </li>
                    <li>
                        <i class="fas fa-church"></i>
                        <a href="#">Church Name 5</a>
                    </li>
                    <li>
                        <i class="fas fa-church"></i>
                        <a href="#">Church Name 6</a>
                    </li>
                </ul>
           </div>
        </div>
    )
}

export default UserSideBar
