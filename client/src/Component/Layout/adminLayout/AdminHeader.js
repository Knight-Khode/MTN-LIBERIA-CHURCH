import React from 'react'
import "../../../admin.css"

const AdminHeader = () => {
    const symbol = ">"
    return (
        <div className="admin-header">
            <div className="admin-header-container">
                <div className="admin-header-left">
                    <h1>
                        Dashboard
                    </h1>
                    <p>
                        Welcome to the Admin dashboard
                    </p>
                </div>
                <div className="admin-header-right">
                    <i class="fas fa-home"></i>
                    <p className="symb">{symbol}</p>
                    <p>Dashboard</p>
                </div>
            </div>
        </div>
    )
}

export default AdminHeader
