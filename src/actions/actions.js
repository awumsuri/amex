import { GET_CHARACTER } from '../ActionTypes/actionTypes'
export const getCharacter = (character) => ({
        type: GET_CHARACTER,
        character
    }
)

