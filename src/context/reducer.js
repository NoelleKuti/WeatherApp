import {
    CHANGE_UNIT,
    EXPAND_FORM,
    HANDLE_CHANGE,
    SET_DATA,
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

    if (action.type === SET_DATA) {
        return {
            ...state,
            city: action.payload.city,
            unit: action.payload.unit,
            data: action.payload.data,
        }
    }

}


export default reducer