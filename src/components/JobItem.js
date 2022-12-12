import JobInformation from './JobInformation';
import JobTagItem from './JobTagItem';

import ManageLogo from '../images/manage.svg';

import './JobItem.css';

const JobListing = () => {
    return (
        <div className='jobitem'>
            <img className='jobitem__logo' src={ManageLogo} alt='Manage company logo' />
            <JobInformation />
            <div className='jobitem__taglist'>
                <JobTagItem>Fullstack</JobTagItem>
                <JobTagItem>Middleweight</JobTagItem>
                <JobTagItem>Python</JobTagItem>
                <JobTagItem>React</JobTagItem>
            </div>
        </div>
    );
};

export default JobListing;
