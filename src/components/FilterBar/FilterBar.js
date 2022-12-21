import React from 'react';
import styled from 'styled-components';

import JobCard from '../UI/JobCard';
import FilterList from './FilterList';

const ClearButton = styled.p`
    margin-left: auto;
    cursor: pointer;
    color: hsl(180, 29%, 50%);
    text-decoration: underline;
`;

const FilterBarCard = styled(JobCard)`
    display: 'flex';
    flex-direction: 'row';
    background-color: 'red';
`;

const FilterBar = (props) => {
    const clearAllHandler = (clear) => {
        props.onClearAll(true);
    };

    const onRemoveHandler = (tag) => {
        props.onRemove(tag);
    };

    return (
        <FilterBarCard>
            <FilterList onRemove={onRemoveHandler} filterList={props.filterList} />
            <ClearButton onClick={clearAllHandler}>Clear</ClearButton>
        </FilterBarCard>
    );
};

export default FilterBar;
