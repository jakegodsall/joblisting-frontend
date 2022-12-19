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

    const onRemoveHandler = (tag) => {
        setAllClickedTags((prevTags) => {
            if (!prevTags.includes(tag)) {
                return prevTags;
            } else {
                let newTags = [];
                for (let i = 0; i < prevTags.length; i++) {
                    if (prevTags[i] !== tag) {
                        newTags.push(prevTags[i]);
                    }
                }
                return newTags;
            }
        });
    };

    const onClickTagHandler = (tag) => {
        setAllClickedTags((prevTags) => {
            let newTags = prevTags;
            if (!prevTags.includes(tag)) {
                newTags = [...prevTags, tag];
            }
            return newTags;
        });
    };

    return (
        <JobListDiv>
            <FilterBar onRemove={onRemoveHandler} filterList={allClickedTags} />
            {props.jobs.map((job, idx) => {
                return <JobItem onClickTag={onClickTagHandler} key={idx} job={job} />;
            })}
        </JobListDiv>
    );
};

export default JobList;
