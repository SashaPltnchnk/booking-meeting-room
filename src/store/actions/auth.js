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

export const logOut = () => ({
    type: LOG_OUT,
    meta: {
        asPromise: true
    }
});



