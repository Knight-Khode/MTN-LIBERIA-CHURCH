import React from 'react'
import live from '../../img/live.jpg'
import offering from "../../img/offering.jpg"
import events from "../../img/events.jpg"
import comment from "../../img/comment.jpg"

const Features = () => {
    return (
        <div className="features">
            <div className="features-content">
                <div className="grid-item">
                    <div className="card">
                        <div className="card-head">
                            <img src={live} alt="img"/>
                        </div>
                        <div className="card-body">
                            <h3>Live Church Service</h3>
                            <p>
                                By selecting your church branch, you get to join the live church service stream
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <img src={offering} alt="img"/>
                        </div>
                        <div className="card-body">
                            <h3>Church Payments</h3>
                            <p>
                                Have access to select payment of offering, donation or tithe to church branch
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <img src={events} alt="img"/>
                        </div>
                        <div className="card-body">
                            <h3>See upcoming events</h3>
                            <p>
                                Signing up gives you the priveledge to view upcoming events.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-head">
                            <img src={comment} alt="img"/>
                        </div>
                        <div className="card-body">
                            <h3>Live Service Comments</h3>
                            <p>
                                Feel free to be interactive and leave comments in the comment section.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
