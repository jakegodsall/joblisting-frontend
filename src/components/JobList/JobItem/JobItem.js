import React from 'react';
import styled from 'styled-components';
import JobCard from '../../UI/JobCard';

import JobInformation from './JobInformation';
import JobTagList from './JobTagList';

const CompanyLogo = styled.img`
    width: 4.5rem;
    margin-right: 1rem;

    @media (max-width: 750px) {
        position: absolute;
        top: -20px;
        width: 3rem;
    }
`;

const JobItem = (props) => {
    let tags = [...[props.job.role, props.job.level, ...props.job.languages, ...props.job.tools]];

    const onClickTagHandler = (tag) => {
        console.log(tag);
        props.onClickTag(tag);
    };

    return (
        <JobCard>
            <CompanyLogo
                src={process.env.PUBLIC_URL + 'assets' + props.job.logo}
                alt='Manage company logo'
            />
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
            <JobTagList onClickTag={onClickTagHandler} tags={tags} />
        </JobCard>
    );
};

export default JobItem;
