import React, { useState } from 'react';

import FilterItem from './FilterItem';

const FilterList = (props) => {
    return (
        <React.Fragment>
            {props.filterList.map((filter, idx) => {
                return <FilterItem key={idx}>{filter}</FilterItem>;
            })}
        </React.Fragment>
    );
};

export default FilterList;
