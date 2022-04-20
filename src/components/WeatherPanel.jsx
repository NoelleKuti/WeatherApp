import styled from 'styled-components';

const WeatherPanel = () => {
    return (
        <Panel>
            <p>Weather!</p>
        </Panel>
    );
}

const Panel = styled.div`
    width: 50%;
    height:50%;
    margin: 0px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
    filter: blur(10px);
`



export default WeatherPanel;