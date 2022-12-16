import React from 'react';

import styled from 'styled-components';
import FilterBar from '../FilterBar/FilterBar';

import JobItem from './JobItem/JobItem';

const JobListDiv = styled.div`
    width: 70%;
    margin-inline: auto;
`;

const JobList = (props) => {
    return (
        <JobListDiv>
            <FilterBar />
            {props.jobs.map((job, idx) => {
                return <JobItem key={idx} job={job} />;
            })}
        </JobListDiv>
    );
};

export default JobList;
