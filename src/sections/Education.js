// We import the raect library
import React from "react";
// Import object from prop-types lets us set required items
import { arrayOf, object } from 'prop-types'

import { IoMdSchool } from "react-icons/io";


const Education = props => {
    const { educationData } = props

    const getEducation = educationData.map( (item, index) => {
        
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

        const getCourses = item.courses.map((course, i) => {
            return (
                <li key={ i }>{ course }</li>
            )
        })

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

    return (
        <section>
            <h2><IoMdSchool/> Education</h2>
            { getEducation }
        </section>
    )
}

Education.propTypes = {
    educationData: arrayOf(object).isRequired
}

export default Education;