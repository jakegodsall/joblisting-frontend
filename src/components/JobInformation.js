import './JobInformation.css';

const JobInformation = () => {
    return (
        <div className='jobinformation'>
            <div className='jobinformation__status'>
                <h3 className='jobinformation__company'>Manage</h3>
                <h3 className='jobinformation__new'>New!</h3>
                <h3 className='jobinformation__featured'>Featured</h3>
            </div>
            <h2 className='jobinformation__title'>Fullstack Developer</h2>
            <div className='jobinformation__subinfo'>
                <p className='jobinformation__timestamp'>1d ago</p>
                <p className='jobinformation__spacer'>{'\u25CF'}</p>
                <p className='jobinformation__contract'>Part Time</p>
                <p className='jobinformation__spacer'>{'\u25CF'}</p>
                <p className='jobinformation__location'>Remote</p>
            </div>
        </div>
    );
};

export default JobInformation;
