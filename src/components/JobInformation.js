import './JobInformation.css';

const JobInformation = (props) => {
    return (
        <div className='jobinformation'>
            <div className='jobinformation__status'>
                <h3 className='jobinformation__company'>{props.company}</h3>
                <h3 className='jobinformation__new'>New!</h3>
                <h3 className='jobinformation__featured'>Featured</h3>
            </div>
            <h2 className='jobinformation__position'>{props.position}</h2>
            <div className='jobinformation__subinfo'>
                <p className='jobinformation__timestamp'>{props.postedAt}</p>
                <p className='jobinformation__spacer'>{'\u25CF'}</p>
                <p className='jobinformation__contract'>{props.contract}</p>
                <p className='jobinformation__spacer'>{'\u25CF'}</p>
                <p className='jobinformation__location'>{props.location}</p>
            </div>
        </div>
    );
};

export default JobInformation;
