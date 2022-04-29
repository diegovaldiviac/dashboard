import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import authReducer from './auth'
import configReducer from './config'
import { configureStore } from "@reduxjs/toolkit"
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'

const rootReducer = combineReducers({
  auth: authReducer,
  config: configReducer
})

const persistConfig = { key: 'root', storage, whitelist: ["auth", "config"] }
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)
