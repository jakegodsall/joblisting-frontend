import JobInformation from './JobInformation';
import JobTagItem from './JobTagItem';
import './JobItem.css';

const reqSvgs = require.context('../images', true, /\.svg$/);

const JobItem = (props) => {
    let tags = [...[props.job.role, props.job.level, ...props.job.languages, ...props.job.tools]];

    const fullImagePath = props.job.logo.split('/');
    const imagePathKey = './' + fullImagePath[fullImagePath.length - 1];

    console.log(reqSvgs.keys());
    console.log(imagePathKey);

    const image = reqSvgs[imagePathKey];

    console.log(image);

    return (
        <div className='jobitem'>
            <img className='jobitem__logo' src={image} alt='Manage company logo' />
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

export default JobItem;
