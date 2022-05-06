import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import authReducer from './auth'
import configReducer from './config'
import tagsReducer, { getTagsEpic } from './tags'
import { configureStore } from "@reduxjs/toolkit"
import { createEpicMiddleware, combineEpics } from "redux-observable"
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

const rootEpic = combineEpics(
  getTagsEpic
)
const epicMiddleware = createEpicMiddleware()

const rootReducer = combineReducers({
  auth: authReducer,
  config: configReducer,
  tags: tagsReducer
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
    }).concat(epicMiddleware)
})

epicMiddleware.run(rootEpic)
export const persistor = persistStore(store)
