export const SET_CURRENT_COLOR = 'SET_CURRENT_COLOR';


export const setCurrentColor = (color) => dispatch => {
    // console.warn(color);
        return dispatch({ type: SET_CURRENT_COLOR, color });
}