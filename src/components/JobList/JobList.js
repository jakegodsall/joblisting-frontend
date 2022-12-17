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
            let newTags = prevTags;
            for (let i = 0; i < tags.length; i++) {
                if (!prevTags.includes(tags[i])) {
                    newTags = [...prevTags, tags[i]];
                }
            }
            return newTags;
        });

        console.log(allClickedTags);
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
