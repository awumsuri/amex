import * as ActionTypes from '../ActionTypes/actionTypes'

const AppReducer = (state={}, action) => {
    switch(action.type) {
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