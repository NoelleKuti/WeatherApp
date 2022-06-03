import styled from 'styled-components'

const CurrentData = ({data, unit}) => {
    const both_Data = {
      condition: data.condition.text,
      icon: data.condition.icon,
      humidity: data.humidity,
      wind_dir: data.wind_dir,
    }
  

  const f_data = {
    temp: data.temp_f,
    feelsLike: data.feelslike_f,
    wind: data.wind_mph,
    precip: data.precip_in,
    gust: data.gust_mph,
  }

  const c_data = {
    temp: data.temp_c,
    feelsLike: data.feelslike_c,
    wind: data.wind_kph,
    precip: data.precip_mm,
    gust: data.gust_kph,
  }

  const isFahrenheit = unit === 'Fahrenheit'
    
    return (
    <DataPanel data={data}>
      <div className='box' id='condition'>
        <h3>Condition:</h3>
        <p>{data && both_Data.condition}</p>
        {data && <img src={both_Data.icon} alt='weather icon'/>}
      </div>
      <div className='box' id='temps'>
        <h3>Current Temps:</h3>
          <p>
            {data && isFahrenheit ? f_data.temp + ' F' : c_data.temp + ' C'} 
          </p>
      </div>
      <div className='box' id='feelsLike'>
        <h3>Feels Like:</h3>
          <p>
            { data && isFahrenheit ? f_data.feelsLike + ' F' : c_data.feelsLike + ' C' }
          </p>
      </div>
      <div className='box' id='precip'>
        <h3>Precipitation:</h3>
          <p>
            { data && isFahrenheit ? f_data.precip + ' in' : c_data.precip + ' mm' }</p>
      </div>
      <div className='box' id='wind'>
        <h3>Gust:</h3>
          <p>{ data && isFahrenheit ? f_data.gust + ' mph' : c_data.gust + ' kph' }</p>
      </div>
      <div className='box' id='windSpeed'>
        <h3>Wind Speed:</h3>
          <p>{ data && isFahrenheit ? f_data.wind + ' mph' : c_data.wind + ' kph' }</p>
      </div>
      <div className='box' id='humidity'>
        <h3>Humidity</h3>
        <p>{data && both_Data.humidity}</p>
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
export default CurrentData