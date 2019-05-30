export const SIGN_IN = 'SIGN_IN';
export const REGISTER= 'REGISTER';
export const LOG_OUT = 'LOG_OUT';

export const register = (data) => ({
    type: REGISTER,
    request: {
        url: '/signUp',
        method: 'POST',
        data
    },
    meta: {
        asPromise: true
    }
});

export const signIn = (data) => ({
    type: SIGN_IN,
    request: {
        url: '/signIn',
        method: 'POST',
        data
    },
    meta: {
        asPromise: true
    }
});

export const logOut = (data) => ({
    type: LOG_OUT,
    // request: {
    //     url: '/signIn',
    //     method: 'POST',
    //     data
    // },
    // meta: {
    //     asPromise: true
    // }

    //localStorage.clear();
    //sessionStorage.clear();
});

// export const register = (email, password) => {
//   return dispatch => {
//     const user = {
//       email,
//       password,
//  };

//     axios
//       .post(`${url}/signUp`, user)
//       .then(res => {
//         const { id, email } = res.data;

//         localStorage.setItem("email", email);
//         dispatch(signUpSuccess(id, email));
//       })
//       .catch(err => {
//         console.log(err.response)
//         dispatch(authFail(err.message));
//       });
//   };
// };

// export const signIn = (user) => {
//   return dispatch => {
//     axios
//       .post(`${url}/signIn`, user)
//       .then(res => {
//         const { token, _id } = res.data;

//         localStorage.setItem("token", token);
//         localStorage.setItem("userId", _id);
//         dispatch(signInSuccess(token));
//       })
//       .catch(err => {
//         dispatch(authFail(err.message));
//       });
//   };
// };



// export const signUpSuccess = (userId, email) => {
//   return {
//     type: actionTypes.SIGNUP_SUCCESS,
//     email,
//     userId
//   };
// };

// export const signInSuccess = (token) => {
//   return {
//     type: actionTypes.SIGNIN_SUCCESS,
//     token
//   };
// };

// export const authFail = (err) => {
//   return {
//     type: actionTypes.AUTH_FAIL,
//     err
//   };
// };

// export const logOut = () => {
//   localStorage.clear();
//   sessionStorage.clear();
//   return {
//     type: actionTypes.LOG_OUT
//   };
// };