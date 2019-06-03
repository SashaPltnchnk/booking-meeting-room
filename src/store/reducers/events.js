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
    events: [],
    err: null
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
        case error(actionTypes.ADD_EVENT):
            // console.log(action.error.response.data.message)
            return {
                ...state,
                err: action.error.response.data.message
            }   
            
        default: return state;
    }  
}

export default reducer;