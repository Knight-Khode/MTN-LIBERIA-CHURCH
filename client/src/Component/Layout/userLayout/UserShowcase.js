import React,{useContext,useEffect} from 'react'
import UserContext from '../../../context/user/userContext'

const UserShowcase = () => {
    const userContext = useContext(UserContext)
    const {getEvents} = userContext

    useEffect(()=>{
        //uncomment this when backend to get events is set
        //getEvents()
    },[])

    return (
        <div className="user-showcase">
            <div className="user-overlay">
                <div className="user-content">
                    <div className="user-left">
                        <h2>SELECT</h2>
                        <h2>YOUR CHURCH BRANCH</h2>
                        <h3>AND LETS WORSHIP TOGETHER</h3>
                    </div>
                    <div className="user-right">
                        <div className="user-right-card">
                            <div className="user-head">
                                <div className="user-head-content">
                                    <p>Upcoming Events</p>
                                    <i class="fas fa-calendar-week"></i>
                                </div>
                            </div>
                            <div className='user-body'>
                                <div className="user-body-item">
                                    <div className="user-body-content">
                                        <i class="fas fa-clock"></i>
                                        <p className="event">Events Name</p>
                                        <p className="time">12:44pm</p>
                                    </div>
                                </div>
                                <div className="user-body-item">
                                    <div className="user-body-content">
                                        <i class="fas fa-clock"></i>
                                        <p className="event">Events Name</p>
                                        <p className="time">12:44pm</p>
                                    </div>
                                </div>
                                <div className="user-body-item">
                                    <div className="user-body-content">
                                        <i class="fas fa-clock"></i>
                                        <p className="event">Events Name</p>
                                        <p className="time">12:44pm</p>
                                    </div>
                                </div>
                                <div className="user-body-item">
                                    <div className="user-body-content">
                                        <i class="fas fa-clock"></i>
                                        <p className="event">Events Name</p>
                                        <p className="time">12:44pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserShowcase
