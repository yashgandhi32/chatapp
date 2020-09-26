import * as types from '../constants/actionTypes';
import * as util from '../utils/helper';

const defaultState = {
    from: { userid: '10', username: 'Yash' },
    to: { userid: '20', username: 'Cartloop' },
    messages: { '10_20': [] }
};

export const messageReducer = (state = defaultState, action) => {
    let { from, to } = state;
    let msgKey = null;
    switch (action.type) {
        case types.ADD_MESSAGE:
            msgKey = util.toFromEncode(from.userid, to.userid);
            let newMessageObj = {
                ...state.messages
            }
            newMessageObj[msgKey] = [...state.messages[msgKey], action.message];
            return {
                ...state,
                messages: newMessageObj

            }
        default:
            return state;
    }
}