import * as actionTypes from "./constant";

const initialState = {
	num: 0,

	banners: [],
	recommends: []
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_NUM:
			return {...state, num: state.num + action.num}
		case actionTypes.CHANGE_BANNERS:
			return {...state, banners: action.banners}
		default:
			return state
	}
}

export default reducer
