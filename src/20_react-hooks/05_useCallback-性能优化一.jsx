import {memo, useCallback, useState} from "react";
const Increment = memo((props) => {
	console.log("Increment重新渲染")
	return (
		<div>
			<button onClick={props.increment}>increment+1</button>
		</div>
	)
});

const App = memo((props) => {
	const [count, setCount] = useState(0);
	const [message, setMessage] = useState("hello");
	// 闭包陷阱，useCallback会有闭包陷阱的问题，注意第二个参数
	// 如果第二个参数不设置的话，increment拿到的永远是它里面第一个定义的函数，这个函数里面捕获的变量也不会发生变化
	// 设置第二个参数的意义在于，当设置的参数发生变化时，increment将拿到新的函数
	const increment = useCallback((  ) => {
		setCount(count+1)
		console.log("increment")
	},[count])

	// 当我们需要将一个函数传递给子组件时，最好将useCallback优化后的函数传递给子组件
	// 这样做的意义是，当父组件中其他state值或props发生变化时，只要传递给子组件的那个props没有发生变化，就可以防止该子组件的重新渲染
	// 当然这个前提是该子组件包裹了memo
	return (
		<div>
			<h2>count: {count}</h2>
			<button onClick={increment}>+1</button>
			<Increment increment={increment}/>
			<hr/>
			<h2>message: {message}</h2>
			<button onClick={(  ) => setMessage(Math.random())}>change message</button>
		</div>
	)
});

export default App;
