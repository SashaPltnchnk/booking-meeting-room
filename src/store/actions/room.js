export const FETCH_ROOMS = 'FETCH_ROOMS';


export const fetchRooms = () => {
 return {  type: FETCH_ROOMS,
    request: {
        url: '/halls',
        method: 'GET'
    },
    meta: {
        asPromise: true
    }
}
};