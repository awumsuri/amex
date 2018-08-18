import ServiceCore from './core/ServiceCore'
import Fjs from 'functional.js'

const fetchCharacter = async url => (    
    await ServiceCore.get(url)
)

const fetchWithArray = async array => {
    const promises = array.map(item => ServiceCore.get(item))
    const data = await Promise.all(promises)
    return data
}

const fetchCharacterWithData = Fjs.curry (
    async (url, property) => {
        const characterData = await fetchCharacter(url)
        const data = await fetchWithArray(characterData[property])
        return data
    }
)

export default { fetchCharacterWithData }