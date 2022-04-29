import styled from 'styled-components';

const SubmitButton = () => {
  return (
    <Submit type='submit'>Enter</Submit>
  )
}

const Submit = styled.button`
    font-size: 1.5rem;
    height: 3rem;
    width: 5rem;
    margin-top: auto;

    background-color: grey;
    color: white;
    border-radius: 25px;
    cursor: pointer;
    border: none;
    :hover {
        text-decoration: underline 5px white;
    }
`
export default SubmitButton