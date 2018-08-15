import ServiceCore from './core/ServiceCore'

const Character = async (id) => {    
    const characterList = await ServiceCore.get(id)

}