import * as ActionTypes from '../actionTypes/actionTypes'
import StarWarAPI from '../services/StarWarAPI';

export const fetchCharacter = (url) => {
    return async dispatch => {
        dispatch(fetchingCharacterRequest())
        try {           
            const character = await StarWarAPI.fetchCharacterWithData(url)
            const filmsData = await character('films')
            const starShips = await character('starships')
            const vehicles = await character('vehicles')
            const homeworld = await StarWarAPI.fetchDataWithPropery(vehicles.characterData.homeworld)
                                    
            dispatch(fetchingCharacterSuccess({
                characterDetails: {
                    starShips: starShips.associatedData,
                    vehicles: vehicles.associatedData,
                    homeworld,
                    ...vehicles.characterData
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
