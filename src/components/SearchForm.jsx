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
        <Form onSubmit={onSubmit}>
            <FormRow className='form-header'>
                <input type='text' name='city' className='city-input' placeholder='Enter City Here' id='city' onChange={handleSearch}/>
                <SubmitButton />
            </FormRow>
            <FormRow>
                <label htmlFor='Fahrenheit'>Fahrenheit</label>
                <input type='radio' name='unit' id='Fahrenheit' value='Fahrenheit' onChange={() => changeUnit('Fahrenheit')} />
            </FormRow>
            <FormRow>
                <label htmlFor='Celsius'>Celsius</label>
                <input type='radio' name='unit' id='Celsius' value='Celsius' onChange={() => changeUnit('Celsius')}  />
            </FormRow>
        </Form>
    );
}

const Form = styled.form`
    background-color: navy;
    width: 100%;
`

const FormRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: white;

`
const Fieldset = styled.div`
    display: block;
`

export default SearchForm