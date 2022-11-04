const {CHANGE_NAME, ADD_NUMBER} = require("./constants");
const changeNameAction = (name) => (
	{
		type: CHANGE_NAME,
		name
	}
)
const addNumAction = (num) => (
	{
		type: ADD_NUMBER,
		num
	}
)

module.exports = {
	changeNameAction,
	addNumAction
}
