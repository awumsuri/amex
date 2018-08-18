import * as ActionTypes from '../actionTypes/actionTypes'
const initialState = {
    isFetching: false
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
                data: action.data, 
                error: false
            }
        default:
            return state
    }
}

export default AppReducer