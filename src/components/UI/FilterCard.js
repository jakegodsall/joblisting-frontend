import React from 'react';
import styled from 'styled-components';
import FilterContent from './FilterContent';
import CloseButton from './CloseButton';

const FilterCard = (props) => {
    return (
        <React.Fragment>
            <FilterContent>{props.children}</FilterContent>
            <CloseButton>X</CloseButton>
        </React.Fragment>
    );
};

export default FilterCard;
