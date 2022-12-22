import React from 'react';
import styled from 'styled-components';

import FilterItem from './FilterItem';

const FilterListDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

const FilterList = (props) => {
    const onRemoveHandler = (tag) => {
        props.onRemove(tag);
    };

    return (
        <FilterListDiv>
            {props.filterList.map((filter, idx) => {
                return (
                    <FilterItem onRemove={onRemoveHandler} key={idx}>
                        {filter}
                    </FilterItem>
                );
            })}
        </FilterListDiv>
    );
};

export default FilterList;
