import {
    GET_EMPLOYEES,
    SET_LOADING
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case GET_EMPLOYEES:
            console.log(action.payload)
            return {
                ...state,
                employees: action.payload.employees.rows,
                employeesCount: action.payload.employees.count,
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