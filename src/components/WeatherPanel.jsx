import styled from 'styled-components';
import { useState } from 'react'

const WeatherPanel = () => {

    const [formData, setFormData] = useState({city: '', unit: 'F'});
    
    const handleCityChange = (e) => {
        e.preventDefault();
        setFormData(formData.city = e.target.value);
        console.log('city is now: ', formData.city);
    }

    const handleUnitChange = (e) => {
        e.preventDefault();
        setFormData(formData.unit = e.target.value);
        console.log('unit is now: ', formData.unit)
    }

    
    return (
        <Panel>
            <div className='panel'>
            
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

    .temp {
        height: 20rem;
    }

    .search-bar {
        background-color: transparent;
        border-radius: 25px;
        padding: .5rem;
        color: navy;
        border: solid white 1px;
    }

    .search-btn {
        background-color: navy;
        border: none;
        color: white;
        border-radius: 25px;
        padding: .5rem;
        width: 5rem;
        :hover {
            text-decoration: underline solid white;
        }
    }
    
`



export default WeatherPanel;