import * as actionTypes from "./constant";
const initialState={
	num: 10
}

function reducer(state=initialState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_NUM:
			return {...state, num: state.num + action.num}
		default:
			return state
	}
}

export default reducer
