import * as ActionTypes from '../ActionTypes/actionTypes'
const initialState = {
    isFetching: false,
    character: undefined    
}

const AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.FETCHING_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: undefined
            }
        case ActionTypes.FETCHING_FAILURE: 
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        case ActionTypes.FETCHING_SUCCESS:
            return {
                ...state,
                isFetching: false,
                character: action.character, 
                error: undefined
            }
        case ActionTypes.GET_CHARACTER:
            return {
                ...state,
                character: action.character,
                error: undefined
            }        
        default:
            return state
    }
}

export default AppReducer