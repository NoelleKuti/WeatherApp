import styled from 'styled-components';
import SearchForm from './SearchForm';

const WeatherPanel = () => {

    return (
        <Panel>
            <div className='panel'>
                <SearchForm />
                <div className='data-body'>
                    <p className='temp'> WEATHER DATA GOES HERE </p>


                </div>
            </div>
        </Panel>
    );
}

const Panel = styled.div`
   

    .panel {
        width: 50%;
        min-height: 10rem;
        min-height:50%;
        margin: 5rem auto;
        padding: 2rem;
        backdrop-filter: blur(16px) saturate(180%);
        -webkit-backdrop-filter: blur(16px) saturate(180%);
        background-color: rgba(202, 211, 232, 0.65);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.125);

    }
    
`



export default WeatherPanel;