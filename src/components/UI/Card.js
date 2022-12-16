import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 10px;
`;

const Card = (props) => {
    return <CardDiv>{props.children}</CardDiv>;
};

export default Card;
