import React from 'react';
import styled from 'styled-components';
import FilterContent from './FilterContent';
import CloseButton from './CloseButton';

const FilterCardDiv = styled.div`
    @media (max-width: 400px) {
        display: flex;
        align-items: center;
    }
`;

const FilterCard = (props) => {
    const onClickHandler = (e) => {
        const tag = e.target.previousElementSibling.innerHTML;
        props.onRemove(tag);
    };

    return (
        <FilterCardDiv>
            <FilterContent>{props.children}</FilterContent>
            <CloseButton onClick={onClickHandler}>X</CloseButton>
        </FilterCardDiv>
    );
};

export default FilterCard;
