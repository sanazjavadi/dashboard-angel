

const reducer = (state, action) => {

    switch (action.type) {

        // fetching dreams
        case 'FETCH_DREAMS_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_DREAMS_SUCCESS':
            return { ...state, loading: false, dreams: action.dreams }
        case 'FETCH_DREAMS_REJECT':
            return { ...state, loading: false, error: action.error }

        //getting dream    
        case 'GET_DREAM_REQUEST':
            return { ...state, loading: true }
        case 'GET_DREAM_SUCCESS':
            return { ...state, loading: false, currentDream: action.dream }
        case 'GET_DREAM_REJECT':
            return { ...state, loading: false, error: action.error }
            
        //removing dream
        case 'REMOVE_DREAMS_REQUEST':
            return { ...state, loading: true }
        case 'REMOVE_DREAMS_SUCCESS':
            const updatedDream = state.dreams.filter((dream) => dream.id !== action.dreamId)
            return { ...state, dreams: updatedDream, loading: false }
        case 'REMOVE_DREAMS_REJECT':
            return { ...state, loading: false, error: action.error }
        
        //creating dream
        case 'CREATE_DREAMS_REQUEST':
            return { ...state, loading: true }
        case 'CREATE_DREAMS_SUCCESS':
            return { ...state, loading: false, state: [...state.dreams, action.dream] }
        case 'CREATE_DREAM_REJECT':
            return { ...state, loading: false, error: action.payload }

        //editing dream    
        case 'EDIT_DREAM_REQUEST':
            return { ...state, loading: true }
        case 'EDIT_DREAM_SUCCESS':
            const updatedDreams = state.dreams.map((dream) => {
                if (dream.id === action.dream.id) {
                    return action.dream
                }
                else {
                    return dream
                }
            })
            return { ...state, loading: false, state: updatedDreams }
        case 'EDIT_DREMS_REJECT':
            return { ...state, loading: false, error: action.payload }

        // default state
        default:
            return state
    }

}


export default reducer;