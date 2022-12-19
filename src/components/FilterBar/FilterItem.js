import React from 'react';
import FilterCard from '../UI/FilterCard';

const FilterItem = (props) => {
    return <FilterCard>{props.children}</FilterCard>;
};

export default FilterItem;
