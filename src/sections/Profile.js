// We import the raect library
import React from "react";
// Import object from prop-types lets us set required items
import { object } from 'prop-types'
// We import the image to reference directly in JSX
import Avi from "../assets/profile_pic.jpg"
// Import React-Icons icons
import { BsPhone, BsGlobe, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaGithubAlt, FaEnvelope } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

// Create the component that will hold user profile details. Remember to use Capitalize the first letter of the component.
const Profile = props => {
    const { profileData } = props

    return (
        <section className="profile">
            <span className="avi"><img src={ Avi }/></span>
            <h1>{ profileData.name }</h1>
            <h2>{ profileData.label }</h2>
            <hr />
            <div className="contact">
            <p><FaEnvelope className="icon" /><a href={`mailto:${profileData.email}`}>  { profileData.email }</a></p>
            <p><BsPhone className="icon"/><a href={`tel:${profileData.phone}`}>  { profileData.phone }</a></p>
            <p><BsGlobe className="icon"/><a href={profileData.url}>  { profileData.url }</a></p>
            <p><GoLocation className="icon" /> { profileData.location.address }, { profileData.location.city }, { profileData.location.postalCode }, { profileData.location.countryCode }</p>
            </div>
            <hr/>
            <h3>You can also find and follow me @</h3>
            <ul className="socialMedia">
                <li><a className="github" href={ profileData.profiles[0].url }><FaGithubAlt className="icon"/>github</a></li>
                <li><a className="linkedin" href={ profileData.profiles[1].url }><BsLinkedin className="icon"/>linkedIn</a></li>
                <li><a className="twitter" href={ profileData.profiles[2].url }><BsTwitter className="icon"/>twitter</a></li>
            </ul>
        </section>
    )
}

Profile.propTypes = {
    profileData: object.isRequired
}

export default Profile;