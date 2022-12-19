import React from 'react';
import styled from 'styled-components';
import FilterContent from './FilterContent';
import CloseButton from './CloseButton';

const FilterCard = (props) => {
    const onClickHandler = (e) => {
        const tag = e.target.previousElementSibling.innerHTML;
        props.onRemove(tag);
    };

    return (
        <React.Fragment>
            <FilterContent>{props.children}</FilterContent>
            <CloseButton onClick={onClickHandler}>X</CloseButton>
        </React.Fragment>
    );
};

export default FilterCard;
