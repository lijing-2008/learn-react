const store = require("./store")
const {changeNameAction, addNumAction} = require("./store/actionCreators")

store.subscribe(() => {
	console.log(store.getState())
})
store.dispatch(changeNameAction("jack"))
store.dispatch(addNumAction(20))
