import * as actionTypes from '../actions/color';

const initialState = {
    colors: [
        {
            // green: '#9FCC9F'
            color: 'green'
        },
        {
            color: 'red'
        },
        {
            color: 'blue'
        },
        {
            color: 'violet'
        },
    ],
    currentColor: ''
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