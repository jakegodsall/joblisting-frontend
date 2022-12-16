import React from 'react';

import FilterItem from './FilterItem';

const FilterList = () => {
    const DUMMYFILTERS = ['Frontend', 'CSS', 'JavaScript'];

    return (
        {DUMMYFILTERS.map((filterItem, idx) => {
            return <FilterItem key={idx}>{filterItem}</FilterItem>
        })}
    );
};

export default FilterList;
