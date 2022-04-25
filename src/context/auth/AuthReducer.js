import {
    LOGIN,
    SET_LOADING
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}