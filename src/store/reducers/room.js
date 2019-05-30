import * as actionTypes from '../actions/room';
import { error, success } from 'redux-saga-requests';

const initialState = {
    rooms: [],
    roomId: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case success(actionTypes.FETCH_ROOMS):
                console.warn(action.data.halls)
            return {
                ...state,
                rooms: action.data,
                // roomId: action.data.
            };
        case error(actionTypes.FETCH_ROOMS): 
            console.error(action.error.message)
            return state;
        default: return state;
    }  
}

export default reducer;