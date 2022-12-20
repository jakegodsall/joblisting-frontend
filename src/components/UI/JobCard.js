import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0px 20px 20px -20px hsl(180, 29%, 50%, 0.5);

    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;

const JobCard = (props) => {
    return <CardDiv>{props.children}</CardDiv>;
};

export default JobCard;
