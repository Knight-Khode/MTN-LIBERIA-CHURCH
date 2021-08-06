import React from 'react'

const StatBox = () => {
    return (
        <div className="stat-box">
            <div className="stat-box-content">
                <div className="stat">
                    <div className="stat1">
                        <i class="fas fa-users"></i>
                        <div className="stat-text">
                            <p className="digit">10k</p>
                            <p>Users</p>
                        </div>
                    </div>
                </div>
                <div className="stat disable">
                    <div className="stat1">
                        <i class="fas fa-bible"></i>
                        <div className="stat-text">
                            <p className="digit">1</p>
                            <p>Daily quote</p>
                        </div>
                    </div>
                </div>
                <div className="stat">
                    <div className="stat1">
                        <i class="fas fa-money-check-alt"></i>
                        <div className="stat-text">
                            <p className="digit">10k</p>
                            <p>Offerings</p>
                        </div>
                    </div>
                </div>
                <div className="stat disable">
                    <div className="stat1">
                        <i class="fas fa-church"></i>
                        <div className="stat-text">
                            <p className="digit">5</p>
                            <p>Churches</p>
                        </div>
                    </div>
                </div>
                <div className="Eventstat">
                    <div className="event-content">
                        <i class="fas fa-coins"></i>
                        <div className="stat-text">
                            <p className="digit">10k</p>
                            <p>Tithe</p>
                        </div>
                    </div>
                </div>
                <div className="Eventstat disable">
                    <div className="event-content">
                        <i class="fas fa-calendar-week"></i>
                        <div className="stat-text">
                            <p className="digit">10</p>
                            <p>Events</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatBox
