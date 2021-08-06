import React from 'react'
import "../../admin.css"
import AdminHeader from '../Layout/adminLayout/AdminHeader'
import AdminSidebar from '../Layout/adminLayout/AdminSidebar'
import AdminBody from '../Layout/adminLayout/AdminBody'
import Nav2 from '../reuseables/Nav2'

const Admin = () => {
    return (
        <div className="admin">
            <AdminHeader/>
            <Nav2/>
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
