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
                isFetching: true
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
                character: action.character
            }
        case ActionTypes.GET_CHARACTER:
            return {
                ...state,
                character: action.character
            }        
        default:
            return state
    }
}

export default AppReducer