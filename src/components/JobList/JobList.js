import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import FilterBar from '../FilterBar/FilterBar';

import JobItem from './JobItem/JobItem';

const JobListDiv = styled.div`
    width: 100%;
`;

const JobList = (props) => {
    const [allClickedTags, setAllClickedTags] = useState([]);

    useEffect(() => {
        props.filters(allClickedTags);
    }, [allClickedTags]);

    const onClearAllHandler = (status) => {
        if (status) {
            setAllClickedTags([]);
            props.filters([]);
        }
    };

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
            {allClickedTags.length !== 0 && (
                <FilterBar
                    onClearAll={onClearAllHandler}
                    onRemove={onRemoveHandler}
                    filterList={allClickedTags}
                />
            )}

            {props.jobs.map((job, idx) => {
                return <JobItem onClickTag={onClickTagHandler} key={idx} job={job} />;
            })}
        </JobListDiv>
    );
};

export default JobList;
