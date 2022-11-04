// import store from "./store";
const store = require("./store")


// 获取store中的数据
console.log(store.getState())

//订阅,只要state有变化就会执行回调函数
const unSubscribe = store.subscribe(
	() => {
		console.log("订阅数据：", store.getState())
	}
)
// actionCreators
const changeNameAction = (name) => (
	{
		type: "change_name",
		name
	}
)
//派发action
store.dispatch(changeNameAction("kobe"))
store.dispatch(changeNameAction("james"))

const numAction = {type: "add_num", num: 10}
store.dispatch(numAction)
