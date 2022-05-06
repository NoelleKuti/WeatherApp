import styled from 'styled-components';
import SubmitButton from './SubmitButton';
import { useAppContext } from '../context/appContext'

const SearchForm = () => {
    const {
        changeUnit,
        fetchData,
        handleChange,
        state,
    } = useAppContext()
    
    const onSubmit = e => {
        e.preventDefault();
        fetchData(state.city, state.unit);
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
                    <SubmitButton onClick={() => onSubmit}/>
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
    background-color: navy;
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