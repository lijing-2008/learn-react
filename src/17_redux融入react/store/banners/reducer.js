import * as actionTypes from "./constant";

const initialState = {
	banners: [],
	recommends: []
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_BANNERS:
			return {...state, banners: action.banners}
		default:
			return state
	}
}

export default reducer
