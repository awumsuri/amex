import { createStore } from 'redux'
import { AppReducer } from '../reducers/AppReducer'

const configureStore = () => {
    const store = createStore(AppReducer)    
    return store
}

export default { configureStore }