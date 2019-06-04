import * as actionTypes from '../actions/color';

const initialState = {
    colors: [
        {
            id: '5ce7fd40e7d2fb789aa24eb2',
            color: 'green'
        },
        {
            id: '5ce7fef6e6b02078ade36813',
            color: 'red'
        },
        {
            id: '5ce7ffe8c71d6778c059f729',
            color: 'blue'
        },
        {
            id: '5ce800654e158e78d3e2b102',
            color: 'violet'
        },
    ],
    currentColor: 'green'
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_CURRENT_COLOR:
        return {
          ...state,
          currentColor: action.color
        };

        default: return state;
    }  
}

export default reducer;