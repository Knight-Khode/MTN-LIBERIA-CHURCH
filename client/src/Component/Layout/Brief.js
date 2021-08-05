import React from 'react'
import worship2 from '../../img/worship2.jpg'

const Brief = () => {
    return (
        <div className="brief">
            <div className="brief-content">
                <div className="brief-1">
                    <h5 className="small text">
                        Our goal is to build Heaven on Earth
                    </h5>
                </div>
                <div className="middle">
                    <p className="text2 desc">This is a church service that believes in Jesus, a church that loves God and people.
                        Overwhelmed by the gift of salvation we have found in Jesus, we have a heart for authentic worship, are passionate about the local church.</p>
                    <ul className="middle-list">
                        <li>
                            <i class="fas fa-quote-left"></i>
                            <p className="text2">We believe that the bible is God's Word</p>
                        </li>
                        <li>
                            <i class="fas fa-quote-left"></i>
                            <p className="text2">We believe that the bible is God's Word</p>
                        </li>
                        <li>
                            <i class="fas fa-quote-left"></i>
                            <p className="text2">We believe that the bible is God's Word</p>
                        </li>
                    </ul>
                </div>
                <div className="brief-img">
                    <img src={worship2} alt="img"/>
                </div>
            </div>
        </div>
    )
}

export default Brief
