import React from 'react';
import styled from 'styled-components';

import TagCard from '../../UI/TagCard';

const JobTagListDiv = styled.div`
    display: flex;
    margin-left: auto;
`;

const JobTagList = (props) => {
    return (
        <JobTagListDiv>
            {props.tags.map((tag, idx) => {
                return <TagCard key={idx}>{tag}</TagCard>;
            })}
        </JobTagListDiv>
    );
};

export default JobTagList;
