import React, { useState, createContext } from 'react';
import { paths } from '../constants/paths';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();

const initialState = {
    message: '',
    user: {},
    token: '',
    redirectLogin: false,
    redirectProfile: false,
    isAuthenticated: false
};

const AuthProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    const history = useHistory();

    const submitRegistrationForm = (data, e) => {
        e.preventDefault();

        fetch('http://localhost:5000/register', {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                password: data.password,
                city: data.city
            }),
        }).then(result => {
            setState({
                ...state, redirectLogin: true, message: result.msg
            })
            history.push(paths.login);
        }).catch((err) => console.error(`Error when running POST to api: ${err}`))
    }

    const submitLoginForm = (data, e) => {
        e.preventDefault();

        fetch('http://localhost:5000/auth', {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        }).then((response) => {
            if (response.status === 200) {
                setState({
                    ...state,
                    redirectProfile: true
                });
                history.push(paths.shop);
            }
            return response.json()
        }).catch((err) => console.error(`Error when running POST to api: ${err}`))
    }

    const logoutUser = () => {
        setState(initialState);
    }

    return (
        <AuthContext.Provider value={{ state, setState, submitRegistrationForm, submitLoginForm, logoutUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
