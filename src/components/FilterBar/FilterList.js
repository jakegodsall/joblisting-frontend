import React, { useState } from 'react';

import FilterItem from './FilterItem';

const FilterList = () => {
    const [filters, setFilters] = useState([]);

    return (
        <React.Fragment>
            {filters.map((filter, idx) => {
                return <FilterItem key={idx}>{filter}</FilterItem>;
            })}
        </React.Fragment>
    );
};

export default FilterList;
