import * as actionTypes from "../actions/auth";
import { error, success } from 'redux-saga-requests';

const initialState = {
  email: null,
  token: null,
  userId: null,
//   err: null,
//   loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case success(actionTypes.REGISTER):
      return {
        ...state,
        token: action.token,
        email: action.email,
        // loading: false
      };
    
    case success(actionTypes.SIGN_IN):
        return {
            ...state,
            email: action.email,
            userId: action.userId,
            // loading: false
            };

    

    // case actionTypes.AUTH_FAIL:
    //   return {
    //     ...state,
    //     err: action.err,
    //     // loading: false
    //   };

    case actionTypes.LOG_OUT:
      return {
        ...state,
        token: null,
        userId: null
      };

    default:
      return state;
  }
};

export default reducer;