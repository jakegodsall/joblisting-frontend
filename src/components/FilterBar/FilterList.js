import React from 'react';

import FilterItem from './FilterItem';

const FilterList = (props) => {
    const onRemoveHandler = (tag) => {
        props.onRemove(tag);
    };

    return (
        <React.Fragment>
            {props.filterList.map((filter, idx) => {
                return (
                    <FilterItem onRemove={onRemoveHandler} key={idx}>
                        {filter}
                    </FilterItem>
                );
            })}
        </React.Fragment>
    );
};

export default FilterList;
