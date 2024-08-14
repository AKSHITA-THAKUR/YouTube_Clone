import {
	createAsyncThunk,
	createSlice,
} from "@reduxjs/toolkit";
import { Categories , MostPopular , singleVideo  } from "../../handleApi";

export interface mainState {
	category: string[];
	data:any[];
	video : any[];
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null;
}

const initialState: mainState = {
	category: [],
	video:[],
	data:[],
	status: "idle",
	error: null,
};

export const fetchCategories = createAsyncThunk("fetchCategories", async () => {
	const categories = await Categories();
	return categories;
});

export const fetchMostPopular = createAsyncThunk("Fetching/mostPopular" , async()=>{
	const popularVideos = await MostPopular();
    return popularVideos;
})
export const fetchVideo = createAsyncThunk("fetchingInfo" , async( id:string | undefined)=>{
const detail = await singleVideo(id);
return detail;
})
const mainSlice = createSlice({
	name: "youTube",
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCategories.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(fetchCategories.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.category = action.payload;
				state.error = null;
			})
			.addCase(fetchCategories.rejected, (state, action) => {
				state.status = "failed";
				state.error =
					action.error.message || "Failed to fetch categories";
			})
			.addCase(fetchMostPopular.pending , (state)=>{
				state.status = "loading";
                state.error = null;
			})
			.addCase(fetchMostPopular.fulfilled , (state , action)=>{
				state.status = "succeeded";
                state.data = action.payload;
                state.error = null;
			})
			.addCase(fetchMostPopular.rejected , (state,action)=>{
				state.status = "failed";
                state.error = action.error.message || "Failed to fetch most popular videos";
			})
			.addCase(fetchVideo.pending , (state )=>{
				state.status = "loading";
                state.error = null;
			})
			.addCase(fetchVideo.fulfilled , (state,action)=>{
              state.status = "succeeded";
			  state.video = action.payload;
			  state.error = null;
			})
			.addCase(fetchVideo.rejected , (state,action)=>{
				state.status = "failed";
                state.error = action.error.message || "Failed to fetch video information";
			})
	},
});

export const youtubeReducer = mainSlice.reducer;