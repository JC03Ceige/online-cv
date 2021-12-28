// Import react library
import React from "react";
// Import object from prop-types lets us set required items
import { object } from 'prop-types';

// We create a WorkItem component that wil hold the details of each work experience item. We capitalize the first letter of the component.
const WorkItem = props => {
    // Set deconstructed props to workItemData to specify what gets passed up.
    const { workItemData } = props;

    /* We create a function getWorkDates to retrieve the dates from the resume.json
    and return it in a specific format. We also set a conditional statement for the end date. */
    const getWorkDates = () => {
        const startdate = workItemData.startDate;
        let enddate = null;
        if (workItemData.endDate !== '') {
            enddate = workItemData.endDate;
        }
        else {
            enddate = 'Present';
        }

        return <span className="startdate">{ startdate } - { enddate }</span>
    }

    // We map through the workItemData and return a list of the summary array items.
    const getSummary = workItemData.summary.map((item, index) => {
        return (
            <li key={ index }>- { item }</li>
        )
    })

    // We map through the workItemData and return a list of the highloghts array items.
    const getHighlights = workItemData.highlights.map((item, index) => {
        return (
            <li key={ index }>* { item }</li>
        )
    })

    // We return the data for each work item with a block of JSX elements.
    return (
        <React.Fragment>
            <h3>{ workItemData.position }, <span>{ workItemData.company }</span></h3>
            <p className="workDates">{ getWorkDates() }</p>
            <p><span>Summary: <br /></span>{ getSummary }</p>
            <p><i>Highlights:</i></p>
            <p>{ getHighlights }</p>
        </React.Fragment>
    )
};

/* We specify that the object is required for this component */
WorkItem.propTypes = {
    workItemData: object.isRequired
}

// We export the component.
export default WorkItem;