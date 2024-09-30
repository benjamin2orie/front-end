

import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

const store = configureStore({
    reducer:{},
    middleware:(getDefaultMiddleware),
    devTools: true
});

export default store;