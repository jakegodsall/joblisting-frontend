import React, { useRef } from 'react';
import styled from 'styled-components';

import TagCard from '../../UI/TagCard';

const JobTagListDiv = styled.div`
    display: flex;
    margin-left: auto;
    flex-wrap: wrap;
    padding-left: 3rem;

    @media (max-width: 750px) {
        border-top: 2px solid hsl(180, 8%, 52%, 0.3);
        padding: 0;
        padding-top: 1rem;
        margin: 1rem 0.5rem 0 0.5rem;
    }
`;

const JobTagList = (props) => {
    const addTagHandler = (e) => {
        const tag = e.target.innerHTML;
        props.onClickTag(tag);
    };

    return (
        <JobTagListDiv>
            {props.tags.map((tag, idx) => {
                return (
                    <TagCard onClick={addTagHandler} key={idx}>
                        {tag}
                    </TagCard>
                );
            })}
        </JobTagListDiv>
    );
};

export default JobTagList;
