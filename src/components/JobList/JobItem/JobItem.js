import React from 'react';
import styled from 'styled-components';
import JobCard from '../../UI/JobCard';

import JobInformation from './JobInformation';
import JobTagList from './JobTagList';

const CompanyLogo = styled.img`
    width: 5rem;
    margin-right: 1rem;
`;

const JobItem = (props) => {
    let tags = [...[props.job.role, props.job.level, ...props.job.languages, ...props.job.tools]];

    return (
        <JobCard>
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
        </JobCard>
    );
};

export default JobItem;
