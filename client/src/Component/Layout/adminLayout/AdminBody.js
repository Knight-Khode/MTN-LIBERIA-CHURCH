import React from 'react'
import StatBox from './StatBox'
import Chart from './Chart'
import Events from './Events'
import Payment from './Payment'
import Users from './Users'

const AdminBody = () => {
    return (
        <div className="adminBody">
            <StatBox/>
            <div className="events-stat-flex">
                <Chart/>
                <Events/>
            </div>
           <Payment/>
           <Users/>
        </div>
    )
}

export default AdminBody
