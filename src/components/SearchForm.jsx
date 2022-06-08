import styled from 'styled-components';

const SearchForm = ({ unit, setUnit, setCity, fetchData, showForecast, setShowForecast }) => {
    

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
        <Form onSubmit={onSubmit}>
            <div className='formFields'>
                <div className='row cityField'>
                    <div className='column'>
                        <label htmlFor='city'>
                            Enter City Here:
                        </label>
                        <input type='text' name='city' placeholder='Enter City Here' id='city' onChange={changeCity}/>
                    </div>
                </div>
                <div className='row unitField'>
                    <div className='row'>
                        <label htmlFor='Fahrenheit'>F</label>
                        <input type='radio' name='unit' id='Fahrenheit' value='Fahrenheit'
                        checked={unit==='Fahrenheit'} onChange={changeUnit} />
                    </div>
                    <div className='row'>
                        <label htmlFor='Celsius'>C</label>
                        <input type='radio' name='unit' 
                        id='Celsius' value='Celsius'
                        checked={unit==='Celsius'} 
                        onChange={changeUnit}  />
                    </div>
                </div>
                < div className='buttons row'>
                    <button type='button' className='toggleForecast' onClick={() => setShowForecast(!showForecast)}>{showForecast ? 'Current Forecast' : '3 Day Forecast'}</button>
                    <button type='submit' className='submitBtn'> Submit </button>
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
        
        input {
            font-size: 1.5rem;
            height: 2rem;
            padding: 5px;
            width: 15rem;
        }
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
        padding: 1rem;
    }

    .buttons {
        width: 15rem;
        justify-content: space-around;
        margin-bottom: 2rem;
    }
`



export default SearchForm