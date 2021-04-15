import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import rootReducer from "../reducers"
import authSaga from "../sagas/auth-saga"

const initialiseAuthSagaMiddleware = createSagaMiddleware()

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {  
    const store =   createStore(
        rootReducer,
        storeEnhancers(
            applyMiddleware(initialiseAuthSagaMiddleware)
        )
    )
    
    initialiseAuthSagaMiddleware.run(authSaga)
    return store
}

export default configureStore;