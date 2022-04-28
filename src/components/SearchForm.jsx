import styled from 'styled-components';
import SubmitButton from './SubmitButton';
import { useAppContext } from '../context/appContext'

const SearchForm = () => {
    const {
        changeUnit,
        expandForm,
        city,
        handleChange,
        isCelsius
    } = useAppContext()
    
    const onSubmit = e => {
        e.preventDefault();
        console.log(city, isCelsius);
    };

    const handleSearch = (e) => {
        handleChange({
            name: e.target.name,
            value: e.target.value
        })
    }
 

    return (
        <Form>
            <FormRow>
                <div className='fieldset'>
                    <input type='text' name='city' className='city-input' placeholder='Enter City Here' id='city' onChange={handleSearch}/>
                    <SubmitButton />
                </div>
                <div className='fieldset'>
                    <FormRow className='reverse'>
                        <label htmlFor='Fahrenheit'>F</label>
                        <input type='radio' name='unit' id='Fahrenheit' value='Fahrenheit' onChange={() => changeUnit('Fahrenheit')} />
                    </FormRow>
                    <FormRow className='reverse'>
                        <label htmlFor='Celsius'>C</label>
                        <input type='radio' name='unit' id='Celsius' value='Celsius' onChange={() => changeUnit('Celsius')}  />
                    </FormRow>
                </div>
            </FormRow>
            
        </Form>
    );
}

const Form = styled.form`
    background-color: navy;
    width: 100%;

    .fieldset {
    width: 20%;
}
    label {
        font-size: 2rem;
        border: solid 2px blue;
    }
`

const FormRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: white;
    padding: 1rem;

    .reverse {
        flex-direction: row-reverse;
        border: solid 1px white;
        justify-content: space-between;
    }

`


export default SearchForm