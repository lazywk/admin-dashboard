import { configureStore } from "@reduxjs/toolkit"
import { PERSIST_STORE_NAME } from "../constants/app.constant"
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from "./rootReducer"

const middlewares = []

const persistConfig = {
    key: PERSIST_STORE_NAME,
    storage,
    whitelist: ['auth']
}

const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer()),
    middleware: (getDefaultMIddleware) =>
        getDefaultMIddleware({
            immutableCheck: false,
            serializableCheck: false
        }).concat(middlewares),
    devTools: process.env.NODE_ENV === 'development'
})

store.asyncReducers = {}

export const persistor = persistStore(store)

export const injectReducer = (key, reducer) => {
    if (store.asyncReducers[key]) {
        return false
    }
    store.asyncReducers[key] = reducer
    store.replaceReducer(
        persistReducer(persistConfig, rootReducer(store.asyncReducers))
    )
    persistor.persist()
    return store
}

export default store