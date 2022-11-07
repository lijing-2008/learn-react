import {memo, useCallback, useRef, useState} from "react";
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
	// 进一步优化，即使count改变时，也使用同一个函数

	// 做法一：将count移除，缺点：闭包陷阱
	// const increment = useCallback((  ) => {
	// 	setCount(count+1)
	// 	console.log("increment")
	// },[])

	// 做法二：useRef，在组件多次渲染时，返回的是同一个值
	const countRef = useRef()
	countRef.current = count
	const increment = useCallback((  ) => {
		setCount(countRef.current+1)
		console.log("increment")
	},[])

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
