import React from 'react'
import bible from '../../../img/bible.jpg'

const UserQuotation = () => {
    return (
        <div className="user-quotation">
            <div className="quotation-img">
                <img src={bible} alt="img"/>
            </div>
            <div className="quotation-info">
                <div className="user-quotation-header">
                    <h3>Daily Quotation</h3>
                    <i class="fas fa-bible"></i>
                </div>
                <div className="user-quotation-body">
                    <div className="verse-chapter">
                        <p>Genesis 2:3</p>
                    </div>
                    <div className="user-quote">
                        <p>My son attend to my words incline thine ears unto my sayings</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserQuotation
