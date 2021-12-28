import React from "react";

import { BsFillPersonLinesFill } from "react-icons/bs";

const About = props => {
    const { aboutData } = props
    
    return (
        <>
            <h2><BsFillPersonLinesFill/> About Me</h2>
            { aboutData }
        </>
    )
}

export default About;