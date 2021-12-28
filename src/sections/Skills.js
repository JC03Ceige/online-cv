// We import the raect library
import React from "react";
// Import object from prop-types lets us set required items
import { arrayOf, object } from 'prop-types'
// Import React-Icons icons
import { BsTools } from "react-icons/bs";

// Create the component that will hold user skills details. We capitalize the first letter of the component.
const Skills = props => {
    // We use a deconstructed variable to declare props. This makes it easier to control the properties in App.js.
    const { skillsData } = props

    /* We declare a getSkills variable that will run a map function and hold the values returned.
    Index and item arguments are passed and used to iterate through the object array. */
    const getSkills = skillsData.map(function(item, index) {
        return (
            <li key={ index }><h3>{ item.name }</h3>: <em>{ item.level }</em><br /><span className="keyWords">{ item.keywords[0] }, { item.keywords[1] }, { item.keywords[2] }, { item.keywords[3] }</span></li>
        )
    })

    // Create the return element with JSX
    return (
        <section className="skills">
            <h2><BsTools/> Skills</h2>
            { getSkills }
        </section>
    )
}

/* We specify that the object array is required for this component */
Skills.propTypes = {
    skillsData: arrayOf(object).isRequired
}

// We export the component.
export default Skills;