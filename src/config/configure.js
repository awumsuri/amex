import { createStore, applyMiddleware } from 'redux'
import app from '../reducers/AppReducer'
import thunk from 'redux-thunk'

const configureStore = () => {
    const createStoreWithMiddle = applyMiddleware(thunk)(createStore)
    const store = createStoreWithMiddle(app)    
    return store
}

export default { configureStore }