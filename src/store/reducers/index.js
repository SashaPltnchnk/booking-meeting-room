// import { error, success } from 'redux-saga-requests';

const initialState = {
    users: []
}

const reducer = (state = initialState, action) => {
    // switch(action.type) {
    //     case success(actionTypes.FETCH_CONTACTS):
    //         return {
    //             ...state,
    //             contacts: action.data
    //         };
    //     case error(actionTypes.FETCH_CONTACTS): 
    //         console.error(action.error.message)
    //         return state;
    //     case success(actionTypes.EDIT_CONTACT):
    //         return {
    //             ...state,
    //             // contacts: action.data
    //         };
    //     case error(actionTypes.EDIT_CONTACT): 
    //         console.error(action.error.message)
    //         return state;
    //     default: return state;
    // }  
}

export default reducer;