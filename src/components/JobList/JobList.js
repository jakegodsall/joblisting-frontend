import React from 'react';

import styled from 'styled-components';

import JobItem from './JobItem/JobItem';

const JobListDiv = styled.div`
    width: 70%;
    margin-inline: auto;
`;

const JobList = (props) => {
    return (
        <JobListDiv>
            {props.jobs.map((job, idx) => {
                return <JobItem key={idx} job={job} />;
            })}
        </JobListDiv>
    );
};

export default JobList;
