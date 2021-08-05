import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
    return (
        <div className="adminSidebar">
            <div className="side-header">
                <i class="fas fa-users-cog"></i>
                <h2>Welcome Admin!</h2>
            </div>
            <ul className="side-body">
                <li>
                    <i class="fas fa-users"></i>
                    <a href="#" className="log-out-btn">
                        <p>View users</p>
                    </a>
                </li>
                <li>                    
                    <i class="fas fa-chart-line"></i>
                    <a href="#" className="log-out-btn">
                        <p>Check Activities</p>
                    </a>
                </li>
                <li>
                    <i class="fas fa-church"></i>
                    <a href="#" className="log-out-btn">
                        <p>View Churches</p>
                    </a>
                </li>
                <li>
                    <i class="fas fa-sign-out-alt"></i>
                    <a href="#" className="log-out-btn">
                        <p>Log Out</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default AdminSidebar
