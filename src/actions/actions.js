import * as ActionTypes from '../ActionTypes/actionTypes'
import StarWarsAPI from '../services/StarWarAPI'

export const fetchCharacter = (url) => {
    return async dispatch => {
        dispatch(fetchingCharacterRequest())
        try {
            let data = await StarWarsAPI.fetchCharacter(url)
            dispatch(fetchingCharacterSuccess(data))
        } catch(error) {
            dispatch(fetchingCharacterError(error))
        }
    }
}

export const fetchingCharacterRequest = () => ({
    type: ActionTypes.FETCHING_REQUEST
})

export const fetchingCharacterSuccess = (data) => ({
    type: ActionTypes.FETCHING_SUCCESS,
    character: data
})

export const fetchingCharacterError = (error) => ({
    type: ActionTypes.FETCHING_FAILURE,
    error
})
