// We import the raect library
import React from "react";
// Import object from prop-types lets us set required items
import { arrayOf, object } from 'prop-types'
// Import React-Icons icons
import { IoMdSchool } from "react-icons/io";

// We create a WorkItem component that wil hold the education details. We capitalize the first letter of the component.
const Education = props => {
    // We use a deconstructed variable to declare props. This makes it easier to control the properties in App.js.
    const { educationData } = props

    /* We declare a getEducation variable that will run a map function and hold the values returned.
    Index and item arguments are passed and used to iterate through the object array. */
    const getEducation = educationData.map( (item, index) => {
        
        // Within getEducation we run a function to get and return dates.
        const getStudyDates = () => {
            const startdate = item.startDate;
            let enddate = null;
            if (item.endDate !== '') {
                enddate = item.endDate;
            }
            else {
                enddate = 'Present';
            }
    
            return <span className="startdate">{ startdate } - { enddate }</span>
        }

        // We have nested arrays and need to map through the item.courses with a nested map function.
        const getCourses = item.courses.map((course, i) => {
            return (
                <li key={ i }>{ course }</li>
            )
        })

        // Finally we return the information within a div element using JSX
        return (
            <div key={ index }>
                <h3><a href={ item.url }>{ item.institution }</a></h3>
                <p>{ item.area }, { item.studyType }</p>
                <p>{ getStudyDates() }</p>
                <p>Courses Completed:</p>
                <ul>{ getCourses }</ul>
            </div>
        )
    })

    // Create the return element with JSX
    return (
        <section className="education">
            <h2><IoMdSchool/> Education</h2>
            { getEducation }
        </section>
    )
}

/* We specify that the object array is required for this component */
Education.propTypes = {
    educationData: arrayOf(object).isRequired
}

// We export the component.
export default Education;