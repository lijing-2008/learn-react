import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHomeBannersAction = createAsyncThunk("fetch/homeBanners",async (param, store ) => {
	console.log("fetchHomeBannersAction run")
	const res = await axios.get("http://39.105.24.108:3000/banner")
	// const {dispatch} = store
	// const banners = res.data.banners
	// dispatch(changeBanners(banners))
	return res.data
})
const homeSlice = createSlice({
	name: "home",
	initialState: {
		banners: []
	},
	reducers: {
		changeBanners(state, {payload}) {
			state.banners = payload
		}
	},
	extraReducers:( builder ) => {
		builder
			.addCase(fetchHomeBannersAction.pending, ( state, action ) => {
				console.log("fetchHomeBannersAction pending")
		})
			.addCase(fetchHomeBannersAction.fulfilled, ( state, {payload} ) => {
					console.log("fetchHomeBannersAction fulfilled")
					console.log(payload)
					state.banners = payload.banners
			})
			.addCase(fetchHomeBannersAction.rejected, ( state, action ) => {
					console.log("fetchHomeBannersAction rejected")
			})
		// [fetchHomeBannersAction.pending](state, action){
		// 	console.log("fetchHomeBannersAction pending")
		// },
		// [fetchHomeBannersAction.fulfilled](state, {payload}){
		// 	console.log("fetchHomeBannersAction fulfilled")
		// 	console.log(payload)
		// 	state.banners = payload.banners
		// },
		// [fetchHomeBannersAction.rejected](state, action){
		// 	console.log("fetchHomeBannersAction rejected")
		// }
	}
})
export const {changeBanners} = homeSlice.actions
export default homeSlice.reducer
