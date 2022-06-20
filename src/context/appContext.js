import React, { useReducer, useContext, createContext } from 'react'
import { PARSE_DATA, CHANGE_UNIT, CHANGE_CITY, SHOW_FORECAST } from './actions'
import { myReducer } from './reducer'

const initialState = {
    unit: 'Fahrenheit',
    city: '',
    userLocation: '',
    currentData: {},
    forecastData: [],
    isLoading: true,
    showForecast: false,
};

 const AppContext = createContext(initialState)

 const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(myReducer, initialState)

    const fetchData = () => {
        let baseUrl = 'https://api.weatherapi.com/v1/forecast.json?key=b7bf7b0695b74998a88214335221401&q=' + state.city + '&days=3&aqi=no&alerts=no'
        
        return fetch(baseUrl)
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: PARSE_DATA, payload: data });
            })
            .catch((error) => console.error(error));
    }

    const handleCityChange = (e) => {
        dispatch({ type: CHANGE_CITY, payload: e.target.value });
            fetchData()
    }
        
    const handleUnitChange = (e) => {
        dispatch({ type: CHANGE_UNIT, payload: e.target.value });
    }
    const toggleForecast = () => {
        dispatch({ type: SHOW_FORECAST });
    }

    return (
        <AppContext.Provider value={{
            ...state,
            fetchData,
            handleCityChange,
            handleUnitChange,
            toggleForecast,
        }}>
            { children }
        </AppContext.Provider>
    )

 }
const useAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useAppContext, }

