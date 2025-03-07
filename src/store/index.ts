import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import accountInfoSlice from "./slice/accountInfoSlice";
import authorizationSlice from "./slice/authorizationSlice";
import documentsSlice from "./slice/documentsSlice";
import histogramsSlice from "./slice/histogramsSlice";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    info: accountInfoSlice,
    auth: authorizationSlice,
    docs: documentsSlice,
    histograms: histogramsSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

export default store;
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;