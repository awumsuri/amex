import ServiceCore from './core/ServiceCore'
import Fjs from 'functional.js'

const fetchDataWithPropery = async property => (
    await ServiceCore.get(property)
)

const fetchDataWithArray = async array => {
    if (array instanceof Array) {
        const promises = array.map(url => ServiceCore.get(url))
        const data = await Promise.all(promises)

        return data
    }

    throw new Error("non array passed into function")
}

const fetchCharacterWithData = Fjs.curry (
    async (characterUrl, arrayProps) => {
        const characterData = await fetchDataWithPropery(characterUrl)
        const associatedData = await fetchDataWithArray(characterData[arrayProps])

        return {
            characterData,
            associatedData
        }
    }
)

export default { fetchCharacterWithData, fetchDataWithPropery }