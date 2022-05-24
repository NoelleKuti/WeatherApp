import React, {useState} from 'react'
import styled from 'styled-components';
import { SearchForm, WeatherData } from "./index"

const WeatherPanel = () => {
    const [unit, setUnit] = useState('Fahrenheit');
    const [city, setCity] = useState('');
    const [data, setData] = useState({});
    
    const fetchData = () => {
        let baseUrl = 'http://api.weatherapi.com/v1/forecast.json?key=b7bf7b0695b74998a88214335221401&q=' + city + '&days=3&aqi=no&alerts=no'
        
        return fetch(baseUrl)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }

    return (
        <Panel>
            <div className='panel'>
                <SearchForm unit={unit} setUnit={setUnit} setCity={setCity} fetchData={fetchData}/>
                <WeatherData data={data}/>
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