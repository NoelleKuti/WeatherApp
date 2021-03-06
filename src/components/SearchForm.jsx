import styled from 'styled-components';
import { useAppContext } from '../context/appContext';

const SearchForm = () => {
    
    const { unit, showForecast, handleCityChange, handleUnitChange, toggleForecast } = useAppContext();

    const onSubmit = (e) => {
        e.preventDefault();
    }       
 
    return (
        <Form onSubmit={onSubmit}>
            <div className='formFields'>
                <div className='row cityField'>
                    <div className='column'>
                        <label htmlFor='city'>
                            Enter City Here:
                        </label>
                        <input
                            className='cityInput'
                            type='text' name='city' placeholder='Enter City Here' id='city' onChange={(e) => handleCityChange(e)} />
                    </div>
                </div>
                <div className='row unitField'>
                    <div className='row'>
                        <label htmlFor='Fahrenheit'>F</label>
                        <input type='radio' name='unit' id='Fahrenheit' value='Fahrenheit'
                        checked={unit==='Fahrenheit'} onChange={(e) => handleUnitChange(e)} />
                    </div>
                    <div className='row'>
                        <label htmlFor='Celsius'>C</label>
                        <input type='radio' name='unit' 
                        id='Celsius' value='Celsius'
                        checked={unit==='Celsius'} 
                        onChange={(e) => handleUnitChange(e)}  />
                    </div>
                </div>
                < div className='buttons row'>
                    <button type='button' className='toggleForecast' onClick={toggleForecast}>{showForecast ? 'Current Forecast' : '3 Day Forecast'}</button>
                </div>
            </div>
            
        </Form>
    );
}

const Form = styled.form`
    width: 100%;
    height: 25%;
    border-bottom: 1px white solid;

    .formFields {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
    }
    .cityField {
        justify-content: center;
        width: 100%;
    }

    .cityInput {
            font-size: 1.5rem;
            height: 2rem;
            padding: 5px;
            width: 90%;
        }

    .unitField {
        height: 3rem;
        div {
            padding: 1rem;
        }
    }

    label {
        font-size: 1.5rem;
    }

    button {
        font-size: 1.5rem;
        cursor: pointer;
        padding: 10px;
        margin: 10px;
    }

    .buttons {
        width: 17rem;
        justify-content: space-around;
        margin-bottom: 2rem;
    }

    @media only screen and (min-width: 768px) {
        .panel {
            width: 35rem;
        }
    }
`



export default SearchForm