import {
    GET_ATTENDANCE,
    SET_LOADING
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case GET_ATTENDANCE:
            console.log(action.payload)
            return {
                ...state,
                attendance: action.payload.attendance.rows,
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