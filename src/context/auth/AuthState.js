import React, { useReducer } from "react";
import axios from "axios";
import authContext from "./authContext";
import AuthReducer from './AuthReducer';
import {
    LOGIN, SET_LOADING
} from "../types";
import Cookies from 'js-cookie';

const AuthState = props => {
    const initialState = {
        user: {},
        token: null,
        loading: false
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)


    // LOGIN USER
    const login = async ({ username, password }) => {
        try {
            
            setLoading();
            const res = await axios({
                method: "post",
                url: `http://localhost:8000/api/user/login`,
                data: { username, password },
                headers: {
                    "Content-Type": "application/json",
                },
            });
            dispatch({
                type: LOGIN,
                payload: res.data
            })
    
            console.log(res);
    
            const expires = (60 * 60) * 1000 * 8
    
            const inEightHours = new Date(new Date().getTime() + expires)
    
            // you will have the exact same setters in your Login page/app too
            Cookies.set('token', state?.token, { expires: inEightHours })
    
            Cookies.set('user', state?.user, { expires: inEightHours })
    
            window.location.reload(false)
        } catch (error) {
            alert(error)
        }
    }

    const getAccessToken = () => Cookies.get('token')

    const isAuthenticated = () => !!getAccessToken()

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return <authContext.Provider
        value={{
            user: state.user,
            token: state.token,
            loading: state.loading,
            login,
            getAccessToken,
            isAuthenticated
        }}
    >
        {props.children}
    </authContext.Provider>
}

export default AuthState;