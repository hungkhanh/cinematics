import createSagaMiddleware from 'redux-saga'
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import rootSaga from './rootSaga'
import registerReducer from '../features/auth/registerSlice'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    register: registerReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)