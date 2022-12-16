import React from 'react';
import styled from 'styled-components';

const JobInformationDiv = styled.div`
    font-size: 1rem;
`;

const CompanyName = styled.h3`
    color: hsl(180, 29%, 50%);
    margin-right: 1rem;
`;

const NewStatusIcon = styled.h3`
    color: #fff;
    border-radius: 30px;
    padding: 0.3rem 0.6rem;
    text-transform: uppercase;
    margin-right: 0.3rem;
    background-color: hsl(180, 29%, 50%);
`;

const FeaturedStatusIcon = styled.h3`
    color: #fff;
    border-radius: 30px;
    padding: 0.3rem 0.6rem;
    text-transform: uppercase;
    margin-right: 0.3rem;
    background-color: #000;
`;

const PositionType = styled.h2`
    font-size: 1.3rem;
    margin: 0.5rem 0;
`;

const StatusSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8rem;
`;

const SubInfoSection = styled.div`
    display: flex;
    align-items: center;
    color: hsl(180, 8%, 52%);
`;

const SubInfoItem = styled.p``;

const SubInfoSpacer = styled.p`
    font-size: 0.5rem;
    margin-inline: 0.5rem;
`;

const JobInformation = (props) => {
    return (
        <JobInformationDiv>
            <StatusSection>
                <CompanyName>{props.company}</CompanyName>
                <NewStatusIcon>New!</NewStatusIcon>
                <FeaturedStatusIcon>Featured</FeaturedStatusIcon>
            </StatusSection>
            <PositionType>{props.position}</PositionType>
            <SubInfoSection>
                <SubInfoItem>{props.postedAt}</SubInfoItem>
                <SubInfoSpacer>{'\u25CF'}</SubInfoSpacer>
                <SubInfoItem>{props.contract}</SubInfoItem>
                <SubInfoSpacer>{'\u25CF'}</SubInfoSpacer>
                <SubInfoItem>{props.location}</SubInfoItem>
            </SubInfoSection>
        </JobInformationDiv>
    );
};

export default JobInformation;
