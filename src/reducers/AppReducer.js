import * as ActionTypes from '../actionTypes/actionTypes'
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
                error: false
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
                error: false
            }
        default:
            return state
    }
}

export default AppReducer