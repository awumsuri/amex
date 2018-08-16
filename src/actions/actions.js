import * as ActionTypes from '../ActionTypes/actionTypes'
import StarWarAPI from '../services/StarWarAPI';

export const fetchCharacter = (url) => {
    return async dispatch => {
        dispatch(fetchingCharacterRequest())
        try {           
            const data = await StarWarAPI.fetchAllCharacterMovies(url)
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