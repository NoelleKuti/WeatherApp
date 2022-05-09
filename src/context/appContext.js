import React, { useReducer, useContext, createContext } from 'react'
import reducer from './reducer'
import {
    CHANGE_UNIT,
    EXPAND_FORM,
    HANDLE_CHANGE,
    SET_DATA,
} from './actions'

const initialState = { 
    city: '', 
    isCelsius: false,
    formExpanded: false,
    data: '',
 }

 const AppContext = createContext(initialState)

 const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)



    const changeUnit = (unit) => {
        dispatch({ 
            type: CHANGE_UNIT,
            payload: {
                unit: unit,
            }
         })
    }

    const expandForm = () => {
        dispatch({ type: EXPAND_FORM })
    }

    const handleChange = ({ name, value }) => {
        dispatch({ 
            type: HANDLE_CHANGE, 
            payload: { name, value}
        })
    }

    const setData = ({city, unit, data}) => {
        dispatch({
            type: SET_DATA,
            payload: { city, unit, data }
        })
    }

    return (
        <AppContext.Provider value={{
            ...state,
            changeUnit,
            expandForm,
            handleChange,
            setData,
        }}>
            { children }
        </AppContext.Provider>
    )

 }
const useAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext, }

