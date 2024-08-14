import { configureStore } from "@reduxjs/toolkit";
import { youtubeReducer } from "./slices/Slice1";

 export const store = configureStore({
    reducer :{
        youTube:youtubeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;