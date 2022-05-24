import styled from 'styled-components';

const SearchForm = ({ unit, setUnit, setCity, fetchData }) => {
    
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