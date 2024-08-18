import { configureStore } from "@reduxjs/toolkit";
import { youtubeReducer , filterReducer } from "./slices/Slice1";

 export const store = configureStore({
    reducer :{
        youTube:youtubeReducer,
        filter:filterReducer
        
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;