import { combineReducers } from 'redux';
import { Calendar, Month, Week, Day, Event } from './class.js';

const initialState = {
}

const genericReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_CALENDAR':
            return Object.assign({}, state, new Calendar(action.payload));
        default:
            return state
    }
}

const reducers = combineReducers({
    genericReducer,
});

export default reducers;