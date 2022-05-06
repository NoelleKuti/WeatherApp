import {
    CHANGE_UNIT,
    EXPAND_FORM,
    HANDLE_CHANGE,
    FETCH_DATA,
} from './actions'

import { initialState } from './appContext'

const reducer = (state, action) => {

    if (action.type === HANDLE_CHANGE) {
        return {
            ...state,
            [action.payload.name]: action.payload.value
        }
    }

    if (action.type === CHANGE_UNIT) {
        if (action.payload.unit === 'Celsius') {
            return {
                ...state,
                isCelsius: true,
            }
        } else {
            return {
                ...state,
                isCelsius: false,
            }
        }
    }

    if (action.type === FETCH_DATA) {
        async function getResponse() {
            let baseUrl = 'http://api.weatherapi.com/v1/forecast.json?key=b7bf7b0695b74998a88214335221401&q=' + action.payload.city + '&days=3&aqi=no&alerts=no'
            
            const response = await fetch(baseUrl);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`); // handle errors
            }
            const data = await response.json(); // response
            console.log(data);
        }
        return {
            ...state,
            city: action.payload.city,
            unit: action.payload.unit,
        }
    }

}


export default reducer