// We import the raect library
import React from "react"
// Import object from prop-types lets us set required items
import { arrayOf, object } from 'prop-types'
// Import the WorkItem component.
import WorkItem from "./WorkItem";
// Import React-Icons icons
import { IoBusiness } from "react-icons/io5";

// We create a WorkItem component that wil hold the details of work experience. We capitalize the first letter of the component.
const Work = props => {
    // We need to create a function that return information from each workItem in the resume object.
    const getWorkExperience = () => {
        // A workData is declared as the property.
        const { workData } = props;
        // We create an empty array for the workItem items we import.
        const workItems = [];

        /* To populate the array with data, we iterate through the workData object array 
        and push workItem values onto the workItems array. */
        workData.forEach((val, index) => {
            workItems.push(<WorkItem key={index} workItemData={val}/>)
        })

        // The function returns the populated array.
        return workItems;
    }

    // Create the return element with JSX
    return (
        <section className="work">
            <h2><IoBusiness/> Work Experience</h2>
            {getWorkExperience()}
        </section>
    )
}

/* We specify that the object array is required for this component */
Work.propTypes = {
    workData: arrayOf(object)
  }
  
// We export the component.
export default Work;