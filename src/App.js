import JobItem from './components/JobItem';

import './App.css';

const App = () => {
    return (
        <div className='joblist'>
            <JobItem />
            <JobItem />
            <JobItem />
        </div>
    );
};

export default App;
