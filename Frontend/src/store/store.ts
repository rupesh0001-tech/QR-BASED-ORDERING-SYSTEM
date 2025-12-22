import { configureStore } from "@reduxjs/toolkit";
import menuReducers from './slices/menuSlices'

export const store = configureStore({
    reducer: {
        menuReducers
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;