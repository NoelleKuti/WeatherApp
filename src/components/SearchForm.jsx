import styled from 'styled-components';
import { useState } from 'react';

const SearchForm = ({ formData }) => {
    const onSubmit = e => {
        e.preventDefault();
        // todo - send data somewhere
    };

    return (
        <Form onSubmit={onSubmit}>
            <div className='form-header form-row'>
                <input type='text' name='city' className='city-input' placeholder='Enter City Here' />
            </div>
        </Form>
    );
};

const Form = styled.form`
    background-color: navy;
    width: 100%;
`

export default SearchForm