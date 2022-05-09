import styled from 'styled-components';
import SubmitButton from './SubmitButton';
import { useAppContext } from '../context/appContext'

const SearchForm = () => {
    const {
        changeUnit,
        setData,
        handleChange,
        state,
        data,
    } = useAppContext()
    
    const onSubmit = async (dispatch, e) => {
        e.preventDefault();
        let payload = {
            city: state.city,
            unit: state.unit,
        }

        console.log(payload);
       
        let baseUrl = 'http://api.weatherapi.com/v1/forecast.json?key=b7bf7b0695b74998a88214335221401&q=' + state.city + '&days=3&aqi=no&alerts=no'
            
        const response = await fetch(baseUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // handle errors
            }
        
        const data = await response.json(); // response
        console.log(data);
        
    };

    const handleSearch = (e) => {
        handleChange({
            name: e.target.name,
            value: e.target.value
        })
    }
 

    return (
        <Form>
            <div className='row'>
                <div className='row cityField'>
                    <div className='column'>
                        <label htmlFor='city'>
                            Enter City Here:
                        </label>
                        <input type='text' name='city' placeholder='Enter City Here' id='city' onChange={handleSearch}/>
                    </div>
                    <SubmitButton clickFn={() => onSubmit}/>
                </div>
                <div className='row unitField'>
                    <div className='row'>
                        <label htmlFor='Fahrenheit'>F</label>
                        <input type='radio' name='unit' id='Fahrenheit' value='Fahrenheit' onChange={() => changeUnit('Fahrenheit')} />
                    </div>
                    <div className='row'>
                        <label htmlFor='Celsius'>C</label>
                        <input type='radio' name='unit' id='Celsius' value='Celsius' onChange={() => changeUnit('Celsius')}  />
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