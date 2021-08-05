import React from 'react'
import { Link } from 'react-router-dom'

const Join = () => {
    return (
        <div className="quote quote2">
            <div className="quote-content">
                <div className="quotation">
                    <h4 className="q-m">
                        Click the Join Us button to enjoy our service
                    </h4>
                    <div className="line"></div>
                    <div>
                        <Link to="/signup">
                            <a className="join-btn">Join Us</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join
