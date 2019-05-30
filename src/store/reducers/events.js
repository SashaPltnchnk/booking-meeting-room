import * as actionTypes from '../actions/events';
// import moment from "moment";
import { error, success } from 'redux-saga-requests';

const initialState = {
    events: [
        // {
        //     title: 'straday everyday',
        //     start: moment().toDate(),
        //     end: moment().toDate(),
        //     allDay: true
        // }
        {
            title: 'AZAZAZ',
            start: new Date(2019, 5, 28, 9, 0, 0),
            end: new Date(2019, 5, 28, 10, 0, 0),
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
        default: return state;
    }  
}

export default reducer;