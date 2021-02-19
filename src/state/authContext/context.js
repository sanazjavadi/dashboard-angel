import React, { useContext, useReducer, createContext } from 'react';
import reducer from './reducer'
import { instance, AUTH_TOKEN  } from '../../service/api'

const currentUser = localStorage.getItem("user")
const parsedUser = currentUser ? JSON.parse(currentUser) : null;
const initialState = {
    user: parsedUser,
    error: '',
    token: AUTH_TOKEN,
    loading: ''
}

const authContext = createContext(initialState);

const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const signUp = (data) => {
     dispatch({type:'REGISTER_REQUEST'})
     instance
     .post('/v1/auth/register', data)
     .then((res) => {
         localStorage.setItem('token', res.data.token.accessToken);
         localStorage.setItem('user', JSON.stringify(res.data.user));
          dispatch({type:'REGISTER_SUCCESS', user:res.data.user});
     })
     .catch(err => {
        console.log(err || err.response)
        dispatch({type:'REGISTER_REJECT', error:err || err.response})
    })
    }
    const logIn = (data) => {
        dispatch({type:'LOGIN_REQUEST'})
        instance
        .post('/v1/auth/register', data)
        .then((res) => {
            localStorage.setItem('token', res.data.token.accessToken);
            localStorage.setItem('user', JSON.stringify(res.data.user));
             dispatch({type:'LOGIN_SUCCESS', user:res.data.user});
        })
        .catch(err => {
            console.log(err || err.response)
            dispatch({type:'LOGIN_REJECT', error:err || err.response})
        })
       }
    return (
        <authContext.provider value={{signUp, logIn, user:state.user, loading:state.loading, error: state.error}}>
            {children}
        </authContext.provider>
    )
}

export const useAuthContext = () => {
    return useContext(authContext)
}

export { authContext, AuthProvider }