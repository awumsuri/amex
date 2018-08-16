import ServiceCore from './core/ServiceCore'
import Fjs from 'functional.js'

const fetchCharacter = async url => (    
    await ServiceCore.get(url)
)

const fetchMoviesByCharacter = async movies => {
    const promises = movies.map(movie => ServiceCore.get(movie))
    const allMovies = await Promise.all(promises)
    return allMovies
}

const fetchAllCharacterMovies = Fjs.curry (
    async url => {
        const characterData = await fetchCharacter(url)
        const films = await fetchMoviesByCharacter(characterData.films)
        return films        
    }
)

export default { fetchAllCharacterMovies }