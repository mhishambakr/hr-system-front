import React from 'react'
import Login from './Login'
import { Navigate } from 'react-router-dom';
import Employees from '../employees/Employees'
import authContext from '../../context/auth/authContext'
import { useContext, useEffect, useState } from 'react';

const Home = () => {

    const AuthContext = useContext(authContext);
    let [isAuth, setIsAuth] = useState(null);
    useEffect(() => {
        setIsAuth(AuthContext.isAuthenticated());
    })
    return (
        isAuth ? (
            // <Employees />
            <Navigate to="/employees" />
        ) : (
            <Login />
        )
    )
}

export default Home