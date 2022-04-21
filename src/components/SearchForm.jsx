import styled from 'styled-components';
import SubmitButton from './SubmitButton';
import { useState } from 'react';

const SearchForm = () => {
    const onSubmit = e => {
        e.preventDefault();
        // todo - send data somewhere
    };

    const [formData, setFormData] = useState({ city: '', unit: ''});
    

    const handleChange = e => {
        setFormData(e.target.value);
    }

    const [expanded, setExpanded] = useState(false);


    return (
        <Form onSubmit={onSubmit}>
            <FormRow className='form-header'>
                <input type='text' name='city' className='city-input' placeholder='Enter City Here' onChange={handleChange} />
                <SubmitButton />
            </FormRow>
            <FormRow>
                <label htmlFor='Fahrenheit'>Fahrenheit</label>
                <input type='radio' name='unit' value='Fahrenheit' id='Fahrenheit' onChange={handleChange} />
            </FormRow>
            <FormRow>
                <label htmlFor='Celsius'>Celsius</label>
                <input type='radio' name='Celsius' value='Celsius' id='Celsius' onChange={handleChange}/>
            </FormRow>
        </Form>
    );
};

const Form = styled.form`
    background-color: navy;
    width: 100%;
`

const FormRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

export default SearchForm