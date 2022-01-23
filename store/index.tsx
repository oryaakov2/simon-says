import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./gameSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
    reducer: {
        game: gameSlice,
        ui: uiSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;