import React, { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'
import { instance, USER_TOKEN } from '../service/api'

const initialState = {
    dreams: [],
    loading: false
}

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchDreams = () => {
        dispatch({ type: 'FETCH_DREAMS_REQUEST' })
        instance
            .get(`v1/user/${USER_TOKEN}/dreams`)
            .then(res => {
                console.log(res.data)
                dispatch({ type: 'FETCH_DREAMS_SUCCESS', dreams: res.data.data })
            })
            .catch(err => {
                console.log(err || err.response)
                dispatch({ type: 'FETCH_DREAMS_REJECT', error: err || err.response })
            })
    }

    const editDream = (data) => {
        dispatch({ type: 'EDIT_DREAM_REQUEST' })
        instance
            .put(`v1/user/${USER_TOKEN}/dreams/${data.id}`, data)
            .then(res => {
                console.log(res.data)
                dispatch({ type: 'EDIT_DREAM_SUCCESS', dream: res.data.data })
            })
            .catch(err => {
                console.log(err || err.response)
                dispatch({ type: 'EDIT_DREAM_REJECT', error: err || err.response })
            })

    }

    const removeDream = (dreamId) => {
        dispatch({ type: 'REMOVE_DREAMS_REQUEST', })
        instance
            .delete(`/v1/user/${USER_TOKEN}/dreams/${dreamId}`)
            .then(res => {
                console.log(res.data)
                dispatch({type:'REMOVE_DREAMS_SUCCESS', dreamId: dreamId})
            })
            .catch(err => {
                console.log(err || err.response)
                dispatch({type:'REMOVE_DREAMS_REJECT', err: err || err.response})
            })
    }

    const createDream = (data)=> {
      dispatch({type:'CREATE_DREAMS_REQUEST'})
      instance
      .post(`v1/user/${USER_TOKEN}/dream`, data)
      .then(res => {
          console.log(res.data.data)
          dispatch({type: 'CREATE_DREAMS_SUCCESS', dream: res.data.data})
      })
      .catch(err=> {
          console.log(err || err.response)
          dispatch({type: 'CREATE_DREAM_REJECT', error:err || err.response })
      })
    }

    return (
        <AppContext.Provider value={{ dreams: state.dreams, fetchDreams, editDream, removeDream, createDream }}>
            {children}
        </AppContext.Provider>
    )

}

export const UseGlobalContext = () => {
    return useContext(AppContext)
}


export { AppContext, AppProvider }
