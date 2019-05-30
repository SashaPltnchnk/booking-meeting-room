import * as actionTypes from "../actions/auth";
import { error, success } from 'redux-saga-requests';

const initialState = {
  email: null,
  token: null,
  userId: null,
  username: null,
  isAuth: false
//   err: null,
//   loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case success(actionTypes.REGISTER):
      console.log(action)
      return {
        ...state,
        // token: action.token,
        email: action.data.email,
        username: action.data.username,
        isAuth: true
        // loading: false
      };
    
    case success(actionTypes.SIGN_IN):
        return {
            ...state,
            email: action.data.email,
            username: action.data.username,
            isAuth: true
            // userId: action.userId,
            // loading: false
            };

    case success(actionTypes.LOG_OUT):
      return {
        ...state,
        token: null,
        userId: null,
        isAuth: false
      };

    default:
      return state;
  }
};

export default reducer;