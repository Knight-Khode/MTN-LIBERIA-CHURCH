import React,{useContext} from 'react'
import AdminContext from '../../../context/admin/adminContext'

const Users = () => {
    const adminContext = useContext(AdminContext)
    const {viewUsers} = adminContext
    return (
        <div className={`users ${viewUsers}`}>
            <div className="user-header">
                <i class="fas fa-users"></i>
                <p>Users</p>
            </div>
            <ul className="user-table-head">
                <li>Full Name</li>
                <li>Last Log</li>
                <li>Time</li>
            </ul>
            <ul className="user-table-body">
                <div className="user-body-content">
                    <li>Kwame Frimpong</li>
                    <li>5/08/2021</li>
                    <li>21:56</li>
                </div>
                <div className="user-body-content">
                    <li>Kwame Frimpong</li>
                    <li>5/08/2021</li>
                    <li>21:56</li>
                </div>
                <div className="user-body-content">
                    <li>Kwame Frimpong</li>
                    <li>5/08/2021</li>
                    <li>21:56</li>
                </div>
                <div className="user-body-content">
                    <li>Kwame Frimpong</li>
                    <li>5/08/2021</li>
                    <li>21:56</li>
                </div>
            </ul>
        </div>
    )
}

export default Users
