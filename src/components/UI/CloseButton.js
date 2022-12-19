import React from 'react';
import styled from 'styled-components';

const CloseButton = styled.button`
    height: 100%;
    background-color: hsl(180, 29%, 50%);
    color: white;
    border: none;
    padding: 0.4rem 0.6rem;
    border-radius: 0 0.3rem 0.3rem 0;
    position: relative;
    right: 2px;
    cursor: pointer;

    &:hover {
        background-color: hsl(180, 14%, 20%);
    }
`;

export default CloseButton;
