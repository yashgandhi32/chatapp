import * as types from '../constants/actionTypes';

export const addMessage = (message) => ({
    type: types.ADD_MESSAGE,
    message
})

export const thunkAddMessage = (message) => {
    return (dispatch, getState, send) => {
        dispatch(addMessage(message));
        send(addMessage(message));
    }

}