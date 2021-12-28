// Import react library
import React from "react";
// Import object from prop-types lets us set required items
import { object } from 'prop-types';

// We create a WorkItem component that wil hold the details of work experience
const WorkItem = props => {
    // Set deconstructed props to workItemData to specify what gets passed up.
    const { workItemData } = props;

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

    const getSummary = workItemData.summary.map((item, index) => {
        return (
            <li key={ index }>- { item }</li>
        )
    })

    const getHighlights = workItemData.highlights.map((item, index) => {
        return (
            <li key={ index }>* { item }</li>
        )
    })

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

WorkItem.propTypes = {
    workItemData: object.isRequired
}

export default WorkItem;