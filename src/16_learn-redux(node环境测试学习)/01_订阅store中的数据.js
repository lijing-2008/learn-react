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
//action
const nameAction1 = {type: "change_name", name: "lucy"}
store.dispatch(nameAction1)
const nameAction2 = {type: "change_name", name: "mike"}
store.dispatch(nameAction2)

//取消订阅
unSubscribe()

const numAction = {type: "add_num", num: 10}
store.dispatch(numAction)
