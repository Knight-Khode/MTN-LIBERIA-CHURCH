import React from 'react'

const Events = () => {
    return (
        <div className="event-form">
            <div className="event-form-header">
                <i class="fas fa-calendar-week"></i>
                <p>Add Events</p>
            </div>
            <form className="events-form">
                <div className="event-form-group">
                    <input type="text" placeholder="Event Name"/>
                </div>
                <div className="event-form-group">
                    <input type="text" placeholder="Event Description"/>
                </div>
                <div className="event-form-group">
                    <input type="datetime-local"/>
                </div>
                <div className="event-btn">
                    <button type="submit">Add Event</button>
                </div>
            </form>
        </div>
    )
}

export default Events
