import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_REJECT,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_REJECT,
    LOGOUT
}
from '../../constans/actionTypes'

const reducer = (state, action) => {
    switch (action.type) {

        case LOGIN_REQUEST:
            return { ...state, loading: true }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return { ...state, user: action.user, token: localStorage.getItem('user') }
        case LOGIN_REJECT:
            return { ...state, loading: false, error: action.error }

        case REGISTER_REQUEST:
            return { ...state, loading: true }
        case REGISTER_REJECT:
            return { ...state, loading: false, error: action.error }
            case  LOGOUT:
                return{...state, user:null, token:null}
        default:
            return state
    }
}

export default reducer;