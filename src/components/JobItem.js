import ManageLogo from '../images/manage.svg';
import './JobItem.css';

const JobListing = () => {
    return (
        <div className='jobitem'>
            <img className='jobitem__logo' src={ManageLogo} alt='Manage company logo' />
            <div className='jobitem__information'>
                <div className='jobitem__status'>
                    <h3>Manage</h3>
                    <h3>New!</h3>
                    <h3>Featured</h3>
                </div>
                <h2 className='jobitem__title'>Fullstack Developer</h2>
                <div className='jobitem__subinfo'>
                    <p>1d ago</p>
                    <p>Part Time</p>
                    <p>Remote</p>
                </div>
            </div>
            <div className='jobitem__taglist'>
                <p className='jobitem__tagitem'>Fullstack</p>
                <p className='jobitem__tagitem'>Midweight</p>
                <p className='jobitem__tagitem'>Python</p>
                <p className='jobitem__tagitem'>React</p>
            </div>
        </div>
    );
};

export default JobListing;
