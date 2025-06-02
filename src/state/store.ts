/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './index'; // Assume you have a rootReducer combining all slices
import rootSaga from './rootSaga'; // Assume you have a rootSaga combining all sagas
import { RESET_STATE } from './session/types';

const initialState: any = {};

// Enable Redux DevTools
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure persist settings
const persistConfig = {
    key: 'persist-root',
    storage,
};

const rootReducerWithReset = (state: any, action: any) => {
    if (action.type === RESET_STATE) {
        state = undefined; // Clear all state
    }
    return rootReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducerWithReset);

// Create the store with middleware and Redux DevTools
const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

// Run saga middleware
sagaMiddleware.run(rootSaga);

// Create persistor and ensure rehydration
const persistor = persistStore(store, null, () => {
    console.log('State has been rehydrated');
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export { store, persistor };
