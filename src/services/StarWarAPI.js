import ServiceCore from './core/ServiceCore'

const fetchCharacter = async (url) => {    
    const characterInfo = await ServiceCore.get(url)
    console.log(JSON.stringify(characterInfo))
    return characterInfo
}

export default { fetchCharacter }