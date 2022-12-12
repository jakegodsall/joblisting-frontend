import './JobTagItem.css';

const JobTagItem = (props) => {
    return <p className='jobitem__tagitem'>{props.children}</p>;
};

export default JobTagItem;
