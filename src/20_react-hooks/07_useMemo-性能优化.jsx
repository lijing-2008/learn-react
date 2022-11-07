import {memo, useMemo, useState} from "react";
import {calcNumTotal} from "./util";


const HelloWorld = memo((props) => {
	console.log("HelloWorld渲染了")
	return (
		<div>hello world</div>
	)
});


const App = memo((props) => {
	const [count, setCount] = useState(0);
	// 每当count变化时，calcNumTotal函数都会重新执行
	// let result = calcNumTotal(50);
	// useMemo优化的是第一个函数的返回值，可以设置第二个参数
	let result = useMemo(() => calcNumTotal(50), []);
	// 当第二个参数发生变化时重新执行
	// 2.依赖count
	// let result = useMemo(() => calcNumTotal(count), [count]);

	// 3.useMemo和useCallback的区别
	// const fn = useCallback(fn1, [])
	// const fn = useMemo((  ) => fn1, [])

	// 4.使用useMemo对子组件渲染进行优化,返回的是同一个对象
	const userinfo = {name: "coder", age: 10}
	const info = useMemo((  ) => userinfo, [])

	return (
		<div>
			<h2>计算结果: {result}</h2>
			<h2>count: {count}</h2>
			<button onClick={() => setCount(count + 1)}>+1</button>
			<HelloWorld info={info}/>
		</div>
	)
});

export default App;
