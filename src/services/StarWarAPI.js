import ServiceCore from './core/ServiceCore'
import Fjs from 'functional.js'

const fetchCharacter = async (url) => {    
    const characterInfo = await ServiceCore.get(url)
    return characterInfo
}

const fetchMoviesByCharacter = async movies => {
    const promises = movies.map(film => ServiceCore.get(film))
    const films = await Promise.all(promises)
    return films
}

const fetchAllCharacterMovies = Fjs.curry (
    async url => {
        const characterData =  await fetchCharacter(url)
        return await fetchMoviesByCharacter(characterData.films)
    }
)

export default { fetchAllCharacterMovies }