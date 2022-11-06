import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "counter",
	initialState:{
		counter: 999
	},
	reducers:{
		changeNumber(state, action){
			const payload = action.payload
			state.counter += payload
		}
	}
})
export const {changeNumber} = counterSlice.actions
export default counterSlice.reducer
