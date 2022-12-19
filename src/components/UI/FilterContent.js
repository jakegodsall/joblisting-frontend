import React from 'react';
import styled from 'styled-components';

const FilterContent = styled.div`
    background-color: hsl(180, 52%, 96%);
    color: hsl(180, 29%, 50%);
    padding: 0.4rem 0.6rem 0.4rem 0.4rem;
    margin: 0.7rem;
    margin-right: 0;
    font-weight: 500;
    font-size: 0.9rem;
    letter-spacing: 0.05rem;
    border-radius: 0.3rem;
`;

// const TagCard = (props) => {
//     const clickTagHandler = (e) => {
//         console.log(props.children);
//         const tag = props.children;
//         props.addTag(tag);
//     };

//     return <TagCardDiv onClick={clickTagHandler}>{props.children}</TagCardDiv>;
// };

export default FilterContent;
