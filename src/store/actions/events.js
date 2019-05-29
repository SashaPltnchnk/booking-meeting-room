export const FETCH_EVENTS = 'FETCH_EVENTS';
export const ADD_EVENT = 'ADD_EVENT';
// export const DELETE_CONTACT = 'DELETE_CONTACT';
// export const EDIT_CONTACT = 'EDIT_CONTACT';


export const fetchEvents = () => ({
    type: FETCH_EVENTS,
    request: {
        url: '/tickets',
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

// export const deleteContact = (id) => ({
//     type: DELETE_CONTACT,
//     request: {
//         url: `/contacts/${id}`,
//         method: 'DELETE'
//     },
//     meta: {
//         asPromise: true
//     }
// });

// export const editContact = (data, id) => ({
//     type: EDIT_CONTACT,
//     request: {
//         url: `/contacts/${id}`,
//         method: 'PUT',
//         data
//     },
//     meta: {
//         asPromise: true
//     }
// });