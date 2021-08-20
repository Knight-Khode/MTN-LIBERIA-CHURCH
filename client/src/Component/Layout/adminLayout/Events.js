import React,{useState,useContext} from 'react'
import AdminContext from '../../../context/admin/adminContext'

const Events = () => {
    const adminContext = useContext(AdminContext)
    const {addEvents} = adminContext

    const [event,setEvent] = useState({
        eventName:'',
        eventDescription:'',
        eventDate:''
    })

    const {eventName,eventDescription,eventDate} = event

    const onChange = (e)=>{
        setEvent({
            ...event,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        if(eventName==="" || eventDescription==="" || eventDate===""){
            alert('make sure all fields are filled')
        }else{
            addEvents(event)
        }
    }

    return (
        <div className="event-form" id="events">
            <div className="event-form-header">
                <i class="fas fa-calendar-week"></i>
                <p>Add Events</p>
            </div>
            <form className="events-form" onSubmit={onSubmit}>
                <div className="event-form-group">
                    <input type="text" placeholder="Event Name" name="eventName" value={eventName} onChange={onChange}/>
                </div>
                <div className="event-form-group">
                    <input type="text" placeholder="Event Description" name="eventDescription" value={eventDescription} onChange={onChange}/>
                </div>
                <div className="event-form-group">
                    <input type="datetime-local" name="eventDate" value={eventDate} onChange={onChange}/>
                </div>
                <div className="event-btn">
                    <button type="submit">Add Event</button>
                </div>
            </form>
        </div>
    )
}

export default Events
