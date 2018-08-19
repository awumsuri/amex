import * as ActionTypes from '../actionTypes/actionTypes'
import StarWarAPI from '../services/StarWarAPI';

export const fetchCharacter = (url) => {
    return async dispatch => {
        dispatch(fetchingCharacterRequest())
        try {           
            const character = await StarWarAPI.fetchCharacterWithData(url)
            const filmsData = await character('films')
            const starShips = await character('starships')
            const characterData = starShips.characterData
            const homeworld = await StarWarAPI.fetchDataWithPropery(characterData.homeworld)
                                    
            dispatch(fetchingCharacterSuccess({
                characterDetails: {
                    ...characterData,
                    starShips: starShips.associatedData,
                    homeworld: homeworld
                },
                filmsData: filmsData.associatedData
            }))
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
    data
})

export const fetchingCharacterError = (error) => ({
    type: ActionTypes.FETCHING_FAILURE,
    error
})
