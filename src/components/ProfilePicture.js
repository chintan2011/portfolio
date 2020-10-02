import React from 'react'
import logo from '../test.jpeg';
import "./ProfilePicture.css"

function ProfilePicture() {
    return (
        <div>
            <img src={logo} className="profile__picture" alt="logo" />
            <strong class="name">Chintan Savalia</strong>
            <div className="email__number">chintan2011@gmail.com</div>
            <div className="email__number">613-501-5799</div>
        </div>
    )
}

export default ProfilePicture
