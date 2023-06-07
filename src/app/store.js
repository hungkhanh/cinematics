import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import authReducer from '../features/auth/authSlice'
import rootSaga from './rootSaga'
import searchReducer from '../features/search/searchSlice'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    auth: authReducer, search: searchReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)