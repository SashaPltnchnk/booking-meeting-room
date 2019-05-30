import * as actionTypes from '../actions/events';
// import moment from "moment";
import { error, success } from 'redux-saga-requests';

const initialState = {
    events: [
        {
            title: 'AZAZAZ',
            start: new Date(2019, 4, 29, 0, 0, 0),
            end: new Date(2019, 4, 29, 23, 0, 0),
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case success(actionTypes.FETCH_EVENTS):
            return {
                ...state,
                events: action.data.map(ticket => {
                    return {
                        ...ticket,
                        start: new Date(ticket.from),
                        end: new Date(ticket.to),
                    }
                })
            };
        case error(actionTypes.FETCH_EVENTS): 
            console.error(action.error.message)
            return state;
        case success(actionTypes.ADD_EVENT):
            return {
                ...state,
                // events: [
                //         ...state.events,
                //         {
                //           start: action.data.from,
                //           end: action.data.to,
                //           title: action.data,
                //           hall_id: "5ce7fd40e7d2fb789aa24eb2"
                //         },
                //       ]
            };
        default: return state;
    }  
}

export default reducer;