// We import the raect library
import React from "react";
// Import object from prop-types lets us set required items
import { object } from 'prop-types';
// Import React-Icons icons
import { BsFillPersonLinesFill } from "react-icons/bs";

// We create a WorkItem component that wil hold the user about details. We capitalize the first letter of the component.
const About = props => {
     // Set deconstructed props to workItemData to specify what gets passed up.
    const { aboutData } = props
    
    // Return the aboutData in JSX
    return (
        <>
            <h2><BsFillPersonLinesFill/> About Me</h2>
            { aboutData }
        </>
    )
}

/* We specify that the object is required for this component */
WorkItem.propTypes = {
    workItemData: object.isRequired
}

// We export the component.
export default About;