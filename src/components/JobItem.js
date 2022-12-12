import JobInformation from './JobInformation';
import JobTagItem from './JobTagItem';

import ManageLogo from '../images/manage.svg';

import './JobItem.css';

const JobListing = (props) => {
    let tags = [...[props.job.role, props.job.level, ...props.job.languages, ...props.job.tools]];

    return (
        <div className='jobitem'>
            <img className='jobitem__logo' src={ManageLogo} alt='Manage company logo' />
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
            <div className='jobitem__taglist'>
                {tags.map((tag, idx) => {
                    return <JobTagItem key={idx}>{tag}</JobTagItem>;
                })}
            </div>
        </div>
    );
};

export default JobListing;
