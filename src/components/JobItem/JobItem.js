import React from 'react';
import styled from 'styled-components';

import JobInformation from './JobInformation';
import JobTagList from './JobTagList';

const JobItemDiv = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 10px;
`;

const CompanyLogo = styled.img`
    width: 5rem;
    margin-right: 1rem;
`;

const JobItem = (props) => {
    let tags = [...[props.job.role, props.job.level, ...props.job.languages, ...props.job.tools]];

    return (
        <JobItemDiv>
            <CompanyLogo src={null} alt='Manage company logo' />
            <JobInformation
                company={props.job.company}
                new={props.job.new}
                featured={props.job.featured}
                position={props.job.position}
                role={props.job.role}
                postedAt={props.job.postedAt}
                contract={props.job.contract}
                location={props.job.location}
            />
            <JobTagList tags={tags} />
        </JobItemDiv>
    );
};

export default JobItem;
