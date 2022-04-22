import {
    HANDLE_CHANGE,
    CHANGE_UNIT,
    EXPAND_FORM
} from './actions'

import { initialState } from './appContext'

const reducer = (state, action) => {

    if (action.type === HANDLE_CHANGE) {
        return {
            ...state,
            page: 1,
            [action.payload.name]: action.payload.value
        }
        console.log(state);
    }

}


export default reducer