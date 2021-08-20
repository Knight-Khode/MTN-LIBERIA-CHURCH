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
                <Chart id="chart"/>
                <Events id="events"/>
            </div>
           <Payment id="payment"/>
           <Users id="users"/>
        </div>
    )
}

export default AdminBody
