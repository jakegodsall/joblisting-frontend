import React from 'react';
import styled from 'styled-components';

import Card from '../UI/Card';
import FilterList from './FilterList';

const ClearButton = styled.p`
    margin-left: auto;
`;

const FilterBar = (props) => {
    return (
        <Card>
            <FilterList />
            <ClearButton>Clear</ClearButton>
        </Card>
    );
};

export default FilterBar;
