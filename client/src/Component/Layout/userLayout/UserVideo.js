import React from 'react'
import heart from '../../../video/heart.mp4'

const UserVideo = () => {
    return (
        <video width="450" height="340" controls autoPlay>
            <source src={heart} type="video/mp4"/>   
        </video>
    )
}

export default UserVideo
