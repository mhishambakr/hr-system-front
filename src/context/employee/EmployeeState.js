import React, { useReducer } from "react";
import axios from "axios";
import employeeContext from "./employeeContext";
import EmployeeReducer from './EmployeeReducer';
import {
    GET_EMPLOYEES, SET_LOADING
} from "../types";

const EmployeeState = props => {
    const initialState = {
        employees: [],
        employeesCount: 0,
        loading: false
    }

    const [state, dispatch] = useReducer(EmployeeReducer, initialState)


    // GET EmployeeS
    const getEmployees = async () => {
        try {
            console.log('here')
            setLoading();
            const res = await axios({
                method: "get",
                url: `http://localhost:8000/api/employee/findAll`,
            });
            dispatch({
                type: GET_EMPLOYEES,
                payload: res.data.data
            })

            console.log(res);
            console.log(state.employees)

            // window.location.reload(false)
        } catch (error) {
            alert(error)
        }
    }

    const updateEmployee = async ({ id, query }) => {
        try {
            setLoading();
            const res = await axios({
                method: "patch",
                url: "http://localhost:8000/api/employee/update",
                data: { id, ...query },
                headers: {
                    "Content-Type": "application/json"
                },
            })

            window.location.reload()

        } catch (error) {
            alert(error?.response?.data?.message);
        }
    };

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return <employeeContext.Provider
        value={{
            employees: state.employees,
            loading: state.loading,
            getEmployees,
            updateEmployee
        }}
    >
        {props.children}
    </employeeContext.Provider>
}

export default EmployeeState;