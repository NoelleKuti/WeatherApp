import React, { useReducer, useContext } from 'react'

import reducer from './reducer'
import {
    HANDLE_CHANGE,
    CHANGE_UNIT,
    EXPAND_FORM,
} from './actions'

const initialState = { 
    city: '', 
    unit: 'Fahrenheit',
    formExpanded: false,
 }

 const AppContext = React.createContext(undefined);

 const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = ({ name, value }) => {
        dispatch({ type: HANDLE_CHANGE, payload: {name, value} })
    }
    const changeUnit = () => {
        dispatch({ type: CHANGE_UNIT })
    }

    const expandForm = () => {
        dispatch({ type: EXPAND_FORM })
    }


 }
const useAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }

