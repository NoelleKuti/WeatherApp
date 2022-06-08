import React, {useState} from 'react'
import styled from 'styled-components';
import { SearchForm, CurrentData, ForecastData } from "./index"

const WeatherPanel = () => {
    const [unit, setUnit] = useState('Fahrenheit');
    const [city, setCity] = useState('');
    const [currentData, setCurrentData] = useState({});
    const [userLocation, setUserLocation] = useState({});
    const [forecastData, setForecastData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showForecast, setShowForecast] = useState(false);
  
    

        const fetchData = () => {
            let baseUrl = 'http://api.weatherapi.com/v1/forecast.json?key=b7bf7b0695b74998a88214335221401&q=' + city + '&days=3&aqi=no&alerts=no'
        
            return fetch(baseUrl)
                .then((response) => response.json())
                .then((data) => {
                    setIsLoading(false);
                    setUserLocation({
                        city: data.location.name + ', ' + data.location.country,
                        latlon: data.location.lat + ', ' + data.location.lon
                    });
                    setCurrentData({
                        all: data.current, condition: data.current.condition
                    });
                    setForecastData([
                        data.forecast.forecastday[0],
                        data.forecast.forecastday[1],
                        data.forecast.forecastday[2]
                    ]);
                })
                .catch((error) => console.error(error));
        }


    return (
        <Panel>
            <div className='panel'>
                <div className='headers'>
                    <div className='latlon'>
                        <p>{"(Lat, Lon) : " + (userLocation ? userLocation.latlon : '')}
                       </p>
                    </div>
                    <h2>{userLocation ? userLocation.city : ''}</h2>
                </div>
                <SearchForm unit={unit} setUnit={setUnit} setCity={setCity} fetchData={fetchData} showForecast={showForecast} setShowForecast={setShowForecast}/>

                {!(isLoading) && !(showForecast)
                    && <CurrentData currentData={currentData} unit={unit} />
                }
                {!(isLoading) && (showForecast)
                    && <ForecastData forecastData={forecastData} unit={unit} />
                }
                
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
        max-height: 3rem;
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
        height: 10rem;
        display: flex;
        flex-direction: column;
        margin: 0px auto;
        justify-content: center;
    }
    
`

export default WeatherPanel;