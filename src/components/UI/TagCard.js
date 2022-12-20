import React from 'react';
import styled from 'styled-components';

const TagCard = styled.div`
    background-color: hsl(180, 52%, 96%);
    color: hsl(180, 29%, 50%);
    padding: 0.4rem;
    margin: 0.7rem;
    margin-right: 0;
    font-weight: 500;
    font-size: 0.9rem;
    letter-spacing: 0.05rem;
    cursor: pointer;
    border-radius: 0.3rem;

    &:hover {
        color: hsl(180, 52%, 96%);
        background-color: hsl(180, 29%, 50%);
    }

    @media (max-width: 750px) {
        margin: 0 1rem 0.7rem 0;
    }
`;

export default TagCard;
