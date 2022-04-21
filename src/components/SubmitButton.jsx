import styled from 'styled-components';

const SubmitButton = () => {
  return (
    <Submit type='submit'>Enter</Submit>
  )
}

const Submit = styled.button`
    width: 5rem;
    height: 3rem;
    padding: 1rem;
    background-color: navy;
    color: white;
    border-radius: 25px;
    border: none;
    :hover {
        text-decoration: underline 5px white;
    }
`
export default SubmitButton