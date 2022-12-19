import React from 'react';
import FilterCard from '../UI/FilterCard';

const FilterItem = (props) => {
    const onRemoveHandler = (tag) => {
        props.onRemove(tag);
    };

    return <FilterCard onRemove={onRemoveHandler}>{props.children}</FilterCard>;
};

export default FilterItem;
