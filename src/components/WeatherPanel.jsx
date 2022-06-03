import React, {useState} from 'react'
import styled from 'styled-components';
import { SearchForm, CurrentData, ForecastData } from "./index"

const WeatherPanel = () => {
    const [unit, setUnit] = useState('Fahrenheit');
    const [city, setCity] = useState('');
    const [currentData, setCurrentData] = useState({});
    const [userLocation, setUserLocation] = useState({});
    const [forecastData, setForecastData] = useState([]);
    const [condition, setCondition] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [showForecast, setShowForecast] = useState(false);
  
    

        const fetchData = () => {
            let baseUrl = 'http://api.weatherapi.com/v1/forecast.json?key=b7bf7b0695b74998a88214335221401&q=' + city + '&days=3&aqi=no&alerts=no'
        
            return fetch(baseUrl)
                .then((response) => response.json())
                .then((data) => {
                    setIsLoading(false);
                    setCondition(data.current.condition);
                    setUserLocation({
                        city: data.location.name + ', ' + data.location.country,
                        latlon: data.location.lat + ', ' + data.location.lon
                    });
                    setCurrentData({
                        all: data.current, condition: data.current.condition
                    });
                    setForecastData(data.forecast.forecastDay)
                })
                .catch((error) => console.error(error));
        }


    return (
        <Panel>
            <div className='panel'>
                <div className='row headers'>
                    <h2>{userLocation ? userLocation.city : ''}</h2>
                    <div className='latlon'>
                        <p>Lat, Lon</p>
                        <p>{userLocation ? userLocation.latlon : ''}</p>
                    </div>
                </div>
                <SearchForm unit={unit} setUnit={setUnit} setCity={setCity} fetchData={fetchData} />
                {isLoading ? <p>Loading</p> : <CurrentData currentData={currentData} condition={condition} unit={unit} />}
                {!showForecast ? <p></p> : <ForecastData forecastData={forecastData} unit={unit} />}
                
            </div>
        </Panel>
    );
}

const Panel = styled.div`

    .panel {
        width: 70%;
        min-height:50%;
        margin: 2rem auto;
        padding: 2rem;
        backdrop-filter: blur(16px) saturate(180%);
        -webkit-backdrop-filter: blur(16px) saturate(180%);
        background-color: rgba(202, 211, 232, 0.65);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.125);
    }

    .latlon {
        display: block;
        max-height: 3rem;
        align-self: flex-start;
        p {
            min-width: 0;
            min-height: 0;
            font-size: 1.5rem;
            padding: 0;
            margin: 0;
            text-align: center;
        }
    }

    .headers {
        height: 5rem;
        margin: 0px auto;
        justify-content: space-between;
    }
    
`

export default WeatherPanel;