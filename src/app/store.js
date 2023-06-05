import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import loginReducer from '../features/auth/loginSlice'
import registerReducer from '../features/auth/registerSlice'
import rootSaga from './rootSaga'
import bannerReducer from '../features/movie/bannerSlice'
import movieReudcer from '../features/movie/movieSlice'
import authReducer from '../features/auth/authSlice'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    auth: authReducer,
    banner: bannerReducer,
    movie: movieReudcer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)