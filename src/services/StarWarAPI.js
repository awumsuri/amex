import ServiceCore from './core/ServiceCore'
import Fjs from 'functional.js'

const fetchCharacter = async url => (    
    await ServiceCore.get(url)
)

const fetchDataWithArray = async array => {
    const promises = array.map(url => ServiceCore.get(url))
    const data = await Promise.all(promises)
    
    return data
}

const fetchCharacterWithData = Fjs.curry (
    async (url, property) => {
        const characterData = await fetchCharacter(url)
        const associatedData = await fetchDataWithArray(characterData[property])

        return {
            characterData,
            associatedData
        }
    }
)

export default { fetchCharacterWithData }