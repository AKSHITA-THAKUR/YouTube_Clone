import {
	createAsyncThunk,
	createSlice,
} from "@reduxjs/toolkit";
import { Categories , MostPopular , singleVideo  , channel } from "../../handleApi";

export interface mainState {
	category: string[];
	data:any[];
	video : any[];
	chanel:any[];
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null;
}

const initialState: mainState = {
	category: [],
	video:[],
	data:[],
	chanel:[],
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
export const fetchChannel = createAsyncThunk("fetchingChannel" , async(id:string)=>{
const channelDetail = await channel(id);
return channelDetail;
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
			.addCase(fetchChannel.pending , (state)=>{
				state.status = "loading";
                state.error = null;
			})
			.addCase(fetchChannel.fulfilled , (state,action)=>{
				state.status = "succeeded";
                state.chanel = action.payload;
                state.error = null;
			})
			.addCase(fetchChannel.rejected , (state,action)=>{
				state.status = "failed";
                state.error = action.error.message || "Failed to fetch channel information";
			})
	},
});

export const youtubeReducer = mainSlice.reducer;