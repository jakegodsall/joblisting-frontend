import React from 'react';

import JobItem from './JobItem';

import './JobList.css';

const JobList = (props) => {
    return (
        <div className='joblist'>
            {props.jobs.map((job, idx) => {
                return <JobItem key={idx} job={job} />;
            })}
        </div>
    );
};

export default JobList;
