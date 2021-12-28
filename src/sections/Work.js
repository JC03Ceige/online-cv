// We import the raect library
import React from "react"
// Import object from prop-types lets us set required items
import { arrayOf, object } from 'prop-types'

import WorkItem from "./WorkItem";

import { IoBusiness } from "react-icons/io5";

const Work = props => {
    const getWorkExperience = () => {
        const { workData } = props;
        const workItems = [];

        workData.forEach((val, index) => {
            workItems.push(<WorkItem key={index} workItemData={val}/>)
        })

        return workItems;
    }

    return (
        <section className="work">
            <h2><IoBusiness/> Work Experience</h2>
            {getWorkExperience()}
        </section>
    )
}

Work.propTypes = {
    workData: arrayOf(object)
  }
  
  export default Work;