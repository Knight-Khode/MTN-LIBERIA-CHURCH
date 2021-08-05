import React from 'react'
import StatBox from './StatBox'
import Chart from './Chart'
import Events from './Events'

const AdminBody = () => {
    return (
        <div className="adminBody">
            <StatBox/>
            <div className="events-stat-flex">
                <Chart/>
                <Events/>
            </div>
        </div>
    )
}

export default AdminBody
