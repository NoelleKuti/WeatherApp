import styled from 'styled-components';
import SubmitButton from './SubmitButton';
import { useState, useReducer } from 'react';
import { useAppContext } from '../context/appContext'

const SearchForm = () => {
    const onSubmit = e => {
        e.preventDefault();
        console.log(e.target.value);
    };

    const {
        handleChange,
        changeUnit,
        expandForm
    } = useAppContext()

    const handleSearch = (e) => {
        handleChange({ name: e.target.name, value: e.target.value })
    }


    return (
        <Form onSubmit={onSubmit}>
            <FormRow className='form-header'>
                <input type='text' name='city' className='city-input' placeholder='Enter City Here' id='city' value={city} onChange={handleSearch} />
                <SubmitButton />
            </FormRow>
            <FormRow>
                <label htmlFor='Fahrenheit'>Fahrenheit</label>
                <input type='radio' name='unit' id='Fahrenheit' value='Fahrenheit' onChange={handleSearch} />
            </FormRow>
            <FormRow>
                <label htmlFor='Celsius'>Celsius</label>
                <input type='radio' name='unit' id='Celsius' value='Celsius' onChange={handleSearch}  />
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