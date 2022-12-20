import React, { useRef } from 'react';
import styled from 'styled-components';

import TagCard from '../../UI/TagCard';

const JobTagListDiv = styled.div`
    display: flex;
    margin-left: auto;
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
