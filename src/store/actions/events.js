export const FETCH_EVENTS = 'FETCH_EVENTS';
export const ADD_EVENT = 'ADD_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const REMOVE_ERROR = 'REMOVE_ERROR';
// export const ADD_ERROR = 'ADD_ERROR';


export const fetchEvents = () => ({
    type: FETCH_EVENTS,
    request: {
        url: '/tickets/',
        method: 'GET'
    }
});

export const addEvent = (data) => ({
    type: ADD_EVENT,
    request: {
        url: '/tickets',
        method: 'POST',
        data
    },
    meta: {
        asPromise: true
    }
});

export const deleteEvent = (id) => ({
    type: DELETE_EVENT,
    request: {
        url: `/tickets/${id}`,
        method: 'DELETE',
    },
    meta: {
        asPromise: true
    }
});


export const removeError = () => dispatch => {
        return dispatch({ type: REMOVE_ERROR,  });
}

// export const addError = (error) => dispatch => {
//     console.warn(error);
//         return dispatch({ type: ADD_ERROR, error });
// }