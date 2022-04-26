import {
    CHANGE_UNIT,
    EXPAND_FORM,
    HANDLE_CHANGE,
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
        
        
        return {
            ...state,
            isCelsius: !state.isCelsius
        }
        
    }

}


export default reducer