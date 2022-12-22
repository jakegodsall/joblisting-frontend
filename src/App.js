import React, { useState } from 'react';

import JobList from './components/JobList/JobList';

import './App.css';

const JOBS = [
    {
        id: 1,
        company: 'Photosnap',
        logo: '/images/photosnap.svg',
        new: true,
        featured: true,
        position: 'Senior Frontend Developer',
        role: 'Frontend',
        level: 'Senior',
        postedAt: '1d ago',
        contract: 'Full Time',
        location: 'USA Only',
        languages: ['HTML', 'CSS', 'JavaScript'],
        tools: [],
    },
    {
        id: 2,
        company: 'Manage',
        logo: '/images/manage.svg',
        new: true,
        featured: true,
        position: 'Fullstack Developer',
        role: 'Fullstack',
        level: 'Midweight',
        postedAt: '1d ago',
        contract: 'Part Time',
        location: 'Remote',
        languages: ['Python'],
        tools: ['React'],
    },
    {
        id: 3,
        company: 'Account',
        logo: '/images/account.svg',
        new: true,
        featured: false,
        position: 'Junior Frontend Developer',
        role: 'Frontend',
        level: 'Junior',
        postedAt: '2d ago',
        contract: 'Part Time',
        location: 'USA Only',
        languages: ['JavaScript'],
        tools: ['React', 'Sass'],
    },
    {
        id: 4,
        company: 'MyHome',
        logo: '/images/myhome.svg',
        new: false,
        featured: false,
        position: 'Junior Frontend Developer',
        role: 'Frontend',
        level: 'Junior',
        postedAt: '5d ago',
        contract: 'Contract',
        location: 'USA Only',
        languages: ['CSS', 'JavaScript'],
        tools: [],
    },
    {
        id: 5,
        company: 'Loop Studios',
        logo: '/images/loop-studios.svg',
        new: false,
        featured: false,
        position: 'Software Engineer',
        role: 'Fullstack',
        level: 'Midweight',
        postedAt: '1w ago',
        contract: 'Full Time',
        location: 'Worldwide',
        languages: ['JavaScript'],
        tools: ['Ruby', 'Sass'],
    },
    {
        id: 6,
        company: 'FaceIt',
        logo: '/images/faceit.svg',
        new: false,
        featured: false,
        position: 'Junior Backend Developer',
        role: 'Backend',
        level: 'Junior',
        postedAt: '2w ago',
        contract: 'Full Time',
        location: 'UK Only',
        languages: ['Ruby'],
        tools: ['RoR'],
    },
    {
        id: 7,
        company: 'Shortly',
        logo: '/images/shortly.svg',
        new: false,
        featured: false,
        position: 'Junior Developer',
        role: 'Frontend',
        level: 'Junior',
        postedAt: '2w ago',
        contract: 'Full Time',
        location: 'Worldwide',
        languages: ['HTML', 'JavaScript'],
        tools: ['Sass'],
    },
    {
        id: 8,
        company: 'Insure',
        logo: '/images/insure.svg',
        new: false,
        featured: false,
        position: 'Junior Frontend Developer',
        role: 'Frontend',
        level: 'Junior',
        postedAt: '2w ago',
        contract: 'Full Time',
        location: 'USA Only',
        languages: ['JavaScript'],
        tools: ['Vue', 'Sass'],
    },
    {
        id: 9,
        company: 'Eyecam Co.',
        logo: '/images/eyecam-co.svg',
        new: false,
        featured: false,
        position: 'Full Stack Engineer',
        role: 'Fullstack',
        level: 'Midweight',
        postedAt: '3w ago',
        contract: 'Full Time',
        location: 'Worldwide',
        languages: ['JavaScript', 'Python'],
        tools: ['Django'],
    },
    {
        id: 10,
        company: 'The Air Filter Company',
        logo: '/images/the-air-filter-company.svg',
        new: false,
        featured: false,
        position: 'Front-end Dev',
        role: 'Frontend',
        level: 'Junior',
        postedAt: '1mo ago',
        contract: 'Part Time',
        location: 'Worldwide',
        languages: ['JavaScript'],
        tools: ['React', 'Sass'],
    },
];

const App = () => {
    const [filteredJobs, setFilteredJobs] = useState(JOBS);

    const filtersHandler = (filters) => {
        setFilteredJobs([]);
        // loop through each job listing
        for (const job of JOBS) {
            // find all possible tags on job listing
            let tags = [...[job.role, job.level, ...job.languages, ...job.tools]];

            if (filters.every((filter) => tags.includes(filter))) {
                setFilteredJobs((prevJobs) => {
                    return [...prevJobs, job];
                });
            }
        }
    };

    return (
        <div className='container'>
            <JobList filters={filtersHandler} jobs={filteredJobs} />
        </div>
    );
};

export default App;
