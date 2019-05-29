import * as actionTypes from '../actions/events';
import moment from "moment";
import { error, success } from 'redux-saga-requests';

const initialState = {
    events: [
        {
            title: 'straday everyday',
            start: moment().toDate(),
            end: moment().toDate(),
            allDay: true
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case success(actionTypes.FETCH_EVENTS):
            return {
                ...state,
                events: action.data
            };
        case error(actionTypes.FETCH_EVENTS): 
            console.error(action.error.message)
            return state;
        case success(actionTypes.ADD_EVENT):
            return {
                ...state,
                events: [
                        ...state.events,
                        {
                          start: action.data,
                          end: action.data,
                          title: action.data,
                        },
                      ]
            };
        // case success(actionTypes.EDIT_CONTACT):
        //     return {
        //         ...state,
        //         // contacts: action.data
        //     };
        // case error(actionTypes.EDIT_CONTACT): 
        //     console.error(action.error.message)
        //     return state;
        default: return state;
    }  
}

export default reducer;