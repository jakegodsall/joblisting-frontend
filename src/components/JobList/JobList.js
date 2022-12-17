import React, { useState } from 'react';

import styled from 'styled-components';
import FilterBar from '../FilterBar/FilterBar';

import JobItem from './JobItem/JobItem';

const JobListDiv = styled.div`
    width: 70%;
    margin-inline: auto;
`;

const JobList = (props) => {
    const [allClickedTags, setAllClickedTags] = useState([]);

    const onClickTagsHandler = (tags) => {
        setAllClickedTags((prevTags) => {
            return [...prevTags, ...tags];
        });
    };

    return (
        <JobListDiv>
            <FilterBar filterList={allClickedTags} />
            {props.jobs.map((job, idx) => {
                return <JobItem onClickTags={onClickTagsHandler} key={idx} job={job} />;
            })}
        </JobListDiv>
    );
};

export default JobList;
