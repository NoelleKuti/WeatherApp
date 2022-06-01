import styled from 'styled-components'

const WeatherData = ({data, unit}) => {
  
  return (
    
    <DataPanel data={data}>
      <div className='box' id='condition'>
        <h3>Condition:</h3>
        <p>{data && data.current.condition.text}</p>
        {data && <img src={data.current.condition.icon} alt='weather icon'/>}
      </div>
      <div className='box' id='temps'>
        <h3>Current Temps:</h3>
          <p>{data && data.current.temp_c} C</p>
          <p>{data && data.current.temp_f} F</p>
      </div>
      <div className='box' id='feelsLike'>
        <h3>Feels Like:</h3>
          <p>{data && data.current.feelslike_c} C</p>
          <p>{data && data.current.feelslike_f} F</p>
      </div>
      <div className='box' id='precip'>
        <h3>Precipitation:</h3>
          <p>{data && data.current.precip_in} in</p>
          <p>{data && data.current.precip_mm} mm</p>
      </div>
      <div className='box' id='wind'>
        <h3>Gust:</h3>
        <p>{data && data.current.gust_mph} mph</p>
        <p>{data && data.current.gust_kph} kph</p>
      </div>
      <div className='box' id='windSpeed'>
        <h3>Wind Speed:</h3>
        <p>{data && data.current.wind_mph} mph</p>
        <p>{data && data.current.wind_kph} kph</p>
      </div>
      <div className='box' id='humidity'>
        <h3>Humidity</h3>
        <p>{data && data.current.humidity}</p>
      </div>
      
      
      
      <div></div>



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
export default WeatherData