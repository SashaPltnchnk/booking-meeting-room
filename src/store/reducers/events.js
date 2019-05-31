import * as actionTypes from '../actions/events';
import { error, success } from 'redux-saga-requests';

const convert = event => {
    return {
        ...event,
        start: new Date(event.from),
        end: new Date(event.to),
    }
}
const initialState = {
    events: [
        // {
        //     title: 'AZAZAZ',
        //     start: new Date(2019, 4, 29, 0, 0, 0),
        //     end: new Date(2019, 4, 29, 23, 0, 0),
        // }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case success(actionTypes.FETCH_EVENTS):
            return {
                ...state,
                events: action.data.map(convert)
            };
        case error(actionTypes.FETCH_EVENTS): 
            console.error(action.error.message)
            return state;
        case success(actionTypes.ADD_EVENT):
            return {
                ...state,
               events: [
                   ...state.events,
                   convert(action.data)
               ]
            };
            
        default: return state;
    }  
}

export default reducer;