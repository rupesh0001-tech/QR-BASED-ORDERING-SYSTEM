import { configureStore } from "@reduxjs/toolkit";
import menuReducers from './slices/menuSlices'
import orderReducers from './slices/orderSlices'

export const store = configureStore({
    reducer: {
        menuReducers,
        orderReducers
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;