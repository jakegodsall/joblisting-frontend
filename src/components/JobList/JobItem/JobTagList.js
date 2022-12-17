import React, { useState } from 'react';
import styled from 'styled-components';

import TagCard from '../../UI/TagCard';

const JobTagListDiv = styled.div`
    display: flex;
    margin-left: auto;
`;

const JobTagList = (props) => {
    const [clickedTags, setClickedTags] = useState('');

    const addTagHandler = (newTag) => {
        if (clickedTags.length === 0) {
            setClickedTags([newTag]);
        } else {
            setClickedTags((prevTags) => {
                if (prevTags.includes(newTag)) {
                    return prevTags;
                }
                return [...prevTags, newTag];
            });
        }

        // if (clickedTags.length === 0) {
        //     setClickedTags([newTag]);
        // }

        // // if (clickedTags.length === 0) {
        // //     setClickedTags([newTag]);
        // // } else if (prevTags.indexOf(newTag) >= 0) {
        // //     setClickedTags((prevTags) => {
        // //         return [...prevTags, newTag];
        // //     });
        // // } else {
        // //     setClickedTags(prevTags);
        // // }

        props.onClickTags(clickedTags);
    };

    return (
        <JobTagListDiv>
            {props.tags.map((tag, idx) => {
                return (
                    <TagCard addTag={addTagHandler} key={idx}>
                        {tag}
                    </TagCard>
                );
            })}
        </JobTagListDiv>
    );
};

export default JobTagList;
