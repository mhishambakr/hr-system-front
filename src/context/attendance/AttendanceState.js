import React, { useReducer } from "react";
import axios from "axios";
import {
    GET_ATTENDANCE, SET_LOADING
} from "../types";
import attendanceContext from "./attendanceContext";
import AttendanceReducer from "./AttendanceReducer";

const AttendanceState = props => {
    const initialState = {
        attendance: [],
        loading: false
    }

    const [state, dispatch] = useReducer(AttendanceReducer, initialState)


    // GET ATTENDANCE
    const getAttendance = async () => {
        try {
            console.log('here')
            setLoading();
            const res = await axios({
                method: "get",
                url: `http://localhost:8000/api/attendance/find`,
            });
            dispatch({
                type: GET_ATTENDANCE,
                payload: res.data.data
            })

            console.log(res);

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

    return <attendanceContext.Provider
        value={{
            attendance: state.attendance,
            getAttendance
        }}
    >
        {props.children}
    </attendanceContext.Provider>
}

export default AttendanceState;