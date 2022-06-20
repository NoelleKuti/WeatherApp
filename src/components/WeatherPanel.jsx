import React, {useReducer} from 'react'
import styled from 'styled-components';
import { SearchForm, CurrentData, ForecastData } from "./index"
import { myReducer } from '../context/reducer';
import { useAppContext } from '../context/appContext';

const WeatherPanel = () => {
    
    const { unit, userLocation, currentData, forecastData, isLoading, showForecast } = useAppContext();
    
    const renderComponent = () => {
        if (showForecast) {
            return <ForecastData forecastData={forecastData} unit={unit} />
        } else if (!showForecast) {
            return <CurrentData currentData={currentData} unit={unit} />
        } else {
            return <p> Still Loading ... </p>
        }
    }

    return (
        <Panel>
            <div className='panel'>
                <SearchForm  />
                
                {(userLocation !== '') &&
                    <div className='headers'>
                        <div className='latlon'>
                            <p>{"(Lat, Lon) : " + userLocation.latlon}</p>
                        </div>
                        <h2> {userLocation.city}</h2>
                    </div>
                }
    
                <div>
                    {!isLoading
                        ? renderComponent()
                        : <p className='noData'>No Data To Show</p>}
                </div>
               

              
                
            </div>
        </Panel>
    );
}

const Panel = styled.div`

    .panel {
        width: 70%;
        max-width: 35rem;
        min-height:50%;
        margin: 2rem auto;
        padding: 1rem;
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
        h2 {
            width: 100%;
            text-align: center;
        }
    }

    .noData {
        font-size: 3rem;
    }
    
`

export default WeatherPanel;