import React from 'react'
import styled from 'styled-components'

const ForecastData = ({data, unit}) => {
    return (
        <DataPanel data={data}>
            <div className='dayPanel' id='dayOne'>
                <p>Day One</p>
            </div>
            <div className='dayPanel' id='dayTwo'>
                <p>DayTwo</p>
            </div>
            <div className='dayPanel' id='dayThree'>
                <p>Day Three</p>
            </div>



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


`

export default ForecastData