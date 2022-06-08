import React from 'react'
import styled from 'styled-components'

const ForecastData = ({forecastData, unit}) => {
    console.log(forecastData);
    const isFahrenheit = unit === 'Fahrenheit';

    return (
        <DataPanel data={forecastData}>
            {forecastData.map((day, i) => {
                return (
                    <div key={i} className='dayContainer' id={'day' + (i + 1)}>
                        <h2 className='dateTitle'>{day.date}</h2>
                        <div className='box'>
                            <h3>Min Avg Max</h3>
                            <div className='row temps'>
                                <p className='temp minTemp'>
                                    {isFahrenheit ? day.day.mintemp_f + ' F' : day.day.mintemp_c + ' C'}
                                </p>
                                <p className='temp avgTemp'>
                                    {isFahrenheit ? day.day.avgtemp_f + ' F' : day.day.avgtemp_c + ' C'}
                                </p>
                                <p className='temp maxTemp'>
                                    {isFahrenheit ? day.day.maxtemp_f + ' F' : day.day.maxtemp_c}
                                </p>
                            </div>
                        </div>
                        <div className= 'box'>
                            <h3>Humidity</h3>
                            <p>{day.day.avghumidity}</p>
                        </div>
                    </div>
                )
            })}
            
        </DataPanel>
    )
}
    
const DataPanel = styled.div`
    
    .dayContainer {
        width: 100%;
        padding-bottom: 2rem;
        border-bottom: 2px solid black; 
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
    }

    .dateTitle {
        align-self: flex-start;
        justify-self: flex-start;
        width: 100%;
    }

    p {
        font-size: 2.5rem;
    }

    .temps {
        justify-content: space-around;
        width: 100%;
        align-self: flex-end;
        align-items: flex-start;
        margin-bottom: 0;
        max-height: 5.5rem;

        .minTemp {
            color: blue;
        }
        .avgTemp {
            color: purple;
        }
        .maxTemp {
            color: red;
        }
    }

    


`

export default ForecastData