import styled from 'styled-components';
import { useState, useEffect } from 'react'

const SearchForm = () => {
    
    const [unit, setUnit] = useState('Fahrenheit')
    const [city, setCity] = useState('')
    
    const fetchData = () => {
        let baseUrl = 'http://api.weatherapi.com/v1/forecast.json?key=b7bf7b0695b74998a88214335221401&q=' + city + '&days=3&aqi=no&alerts=no'
        
        return fetch(baseUrl)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        fetchData();
    }       
            
    const changeCity = (e) => {
        setCity(e.target.value);
    }

    const changeUnit = (e) => {
        setUnit(e.target.value);
    }
 
    return (
        <Form>
            <div className='row'>
                <div className='row cityField'>
                    <div className='column'>
                        <label htmlFor='city'>
                            Enter City Here:
                        </label>
                        <input type='text' name='city' placeholder='Enter City Here' id='city' onChange={changeCity}/>
                    </div>
                    <button type='button' onClick={onSubmit}> Submit </button>
                </div>
                <div className='row unitField'>
                    <div className='row'>
                        <label htmlFor='Fahrenheit'>F</label>
                        <input type='radio' name='unit' id='Fahrenheit' value='Fahrenheit' onChange={changeUnit} />
                    </div>
                    <div className='row'>
                        <label htmlFor='Celsius'>C</label>
                        <input type='radio' name='unit' id='Celsius' value='Celsius' onChange={changeUnit}  />
                    </div>
                </div>
            </div>
            
        </Form>
    );
}

const Form = styled.form`
    width: 100%;

    .cityField {
        width: 40%;
        justify-content: space-between;
        align-content: center;
    }

    .unitField {
        width: 20%;
    }

    label {
        font-size: 2rem;
        color: white;
    }
`



export default SearchForm