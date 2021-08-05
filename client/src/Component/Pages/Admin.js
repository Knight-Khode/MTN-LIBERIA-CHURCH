import React from 'react'
import "../../admin.css"
import AdminHeader from '../Layout/adminLayout/AdminHeader'
import AdminSidebar from '../Layout/adminLayout/AdminSidebar'
import AdminBody from '../Layout/adminLayout/AdminBody'

const Admin = () => {
    return (
        <div className="admin">
            <AdminHeader/>
            <div className="admin-body-content">
                <div className="admin-flex">
                    <AdminSidebar/>
                    <AdminBody/>
                </div>
            </div>        
        </div>
    )
}

export default Admin
