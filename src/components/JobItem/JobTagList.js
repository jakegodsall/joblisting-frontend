import React from 'react';
import styled from 'styled-components';

// import JobTagItem from './JobTagItem';

const JobTagListDiv = styled.div`
    display: flex;
    margin-left: auto;
`;

const JobTagItem = styled.p`
    background-color: hsl(180, 52%, 96%);
    color: hsl(180, 29%, 50%);
    padding: 0.4rem;
    margin: 0.3rem;
    font-weight: 700;
    font-size: 0.9rem;
    letter-spacing: 0.02rem;
`;

const JobTagList = (props) => {
    return (
        <JobTagListDiv>
            {props.tags.map((tag, idx) => {
                return <JobTagItem key={idx}>{tag}</JobTagItem>;
            })}
        </JobTagListDiv>
    );
};

export default JobTagList;
