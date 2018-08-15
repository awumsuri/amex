import ServiceCore from './core/ServiceCore'

const fetchCharacter = async (id) => {    
    const characterInfo = await ServiceCore.get(id)
    return characterInfo
}

export default { fetchCharacter }