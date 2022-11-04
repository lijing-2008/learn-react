const {CHANGE_NAME, ADD_NUMBER} = require("./constants");

//初始state
const initState = {
	name: "coder",
	num: 100
}

// 参数一：store中目前保存的state
// 参数二：本次需要更新的action，dispatch传入的action
// 返回值：它的返回值会作为store之后存储的state
function reducer(state = initState, action) {
	switch (action.type) {
		case CHANGE_NAME: {
			return {...state, name: action.name}
		}
		case ADD_NUMBER: {
			return {...state, num: state.num + action.num}
		}
		default:
			return state
	}
}

module.exports = reducer

