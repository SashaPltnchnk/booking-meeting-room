export const FETCH_ROOMS = 'FETCH_ROOMS';


export const fetchRooms = () => ({
    type: FETCH_ROOMS,
    request: {
        url: '/halls',
        method: 'GET'
    }
});