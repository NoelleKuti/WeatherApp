import React from 'react'
import styled from 'styled-components'

const ForecastData = ({forecastData, unit}) => {
    console.log(forecastData);
    const isFahrenheit = unit === 'Fahrenheit';

    return (
        <DataPanel data={forecastData}>
            {forecastData.map((day, i) => {
                return (
                    <div key={i} className='dayContainer column' id={'day' + (i + 1)}>
                        <h2>{day.date}</h2>
                        <div className='temps box'>
                            <h3>Min Avg Max</h3>
                            <div className='row'>
                                <p className='minTemp'>
                                    {isFahrenheit ? day.day.mintemp_f + ' F' : day.day.mintemp_c + ' C'}
                                </p>
                                <p className='avgTemp'>
                                    {isFahrenheit ? day.day.avgtemp_f + ' F' : day.day.avgtemp_c + ' C'}
                                </p>
                                <p className='maxTemp'>
                                    {isFahrenheit ? day.day.maxtemp_f + ' F' : day.day.maxtemp_c}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
            
        </DataPanel>
    )
}
    
const DataPanel = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    padding: 1rem;
    
    .dayContainer {
        width: 100%;
        border-bottom: 1px solid black;
        margin: 0 auto;
        align-content: center;
        flex-wrap: wrap;
    }

    .box {
        display: flex;
        border: 1px white solid;
        flex-direction: column;
        min-width: 12rem;
        height: 10rem;
        align-items: center;
        justify-items: space-around;
        margin: 0px auto;
        p {
        font-size: 4vw;
        min-width: 0;
        min-height: 0;
        padding: 0;
        margin: 0;
        }

    }

    p {
        font-size: 3vw;
        padding: 1rem;
    }
    .minTemp {
        color: blue;
    }
    .avgTemp {
        color: purple;
    }
    .maxTemp {
        color: red;
    }


`

export default ForecastData