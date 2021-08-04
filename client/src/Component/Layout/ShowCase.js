import React from 'react'
import { Link } from 'react-router-dom'
import wosrship from '../../img/worship.jpg'

const ShowCase = () => {
    return (
        <div className="showcase">
            <div className="overlay">
                <div className="showcase-content">
                    <div className="left">
                        <h1 className="lead">Welcome</h1>
                        <h2 className="medium">To The MTN Live</h2>
                        <h3 className="small">Church Service</h3>
                    </div>
                    <div className="right">
                        <div className="right-head">
                            <img src={wosrship} alt="img"/>
                        </div>
                        <div className="right-head-btm">
                            <div className="info">
                                <div className="icon">
                                    <i className="fas fa-user-plus"></i>
                                </div>
                                <p>Sign Up for our service</p>
                            </div>
                            <div className="info">
                                <div className="icon">
                                    <i class="fas fa-mouse-pointer"></i>
                                </div>
                                <p>Select Church Branch</p>
                            </div>
                            <div className="info">
                                <div className="icon">
                                    <i class="fas fa-money-bill-wave"></i>
                                </div>
                                <p>Make Payments to church</p>
                            </div>
                            <Link to="/signup">
                                <a className="start-btn"></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowCase
