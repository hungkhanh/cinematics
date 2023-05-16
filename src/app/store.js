import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import loginReducer from '../features/auth/loginSlice'
import registerReducer from '../features/auth/registerSlice'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    register: registerReducer,
    login: loginReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)