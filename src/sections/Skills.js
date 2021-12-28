// We import the raect library
import React from "react";
// Import object from prop-types lets us set required items
import { arrayOf, object } from 'prop-types'

import { BsTools } from "react-icons/bs";

const Skills = props => {
    const { skillsData } = props

    const getSkills = skillsData.map(function(item, index) {
        return (
            <li key={ index }><h3>{ item.name }</h3>: <em>{ item.level }</em><br /><span className="keyWords">{ item.keywords[0] }, { item.keywords[1] }, { item.keywords[2] }, { item.keywords[3] }</span></li>
        )
    })

    return (
        <>
            <h2><BsTools/> Skills</h2>
            { getSkills }
        </>
    )
}

Skills.propTypes = {
    skillsData: arrayOf(object).isRequired
}

export default Skills;