import React from 'react';
import styled from 'styled-components';

import JobCard from '../UI/JobCard';
import FilterList from './FilterList';

const ClearButton = styled.p`
    margin-left: auto;
`;

const FilterBar = (props) => {
    return (
        <JobCard>
            <FilterList />
            <ClearButton>Clear</ClearButton>
        </JobCard>
    );
};

export default FilterBar;
