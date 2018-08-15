import { createStore } from 'redux'
import { AppReducer } from '../reducers/AppReducer'

export const configureStore = () => {
    const store = createStore(AppReducer)    
    return store
}