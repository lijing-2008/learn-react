import React, {memo, useEffect, useState} from 'react';

const App = memo((props) => {
	const [count, setCount] = useState(200);
	// 第二个参数是个数组，告诉react当谁发生改变时第一个回调函数才执行
	useEffect(() => {
		console.log("修改title")
		document.title = count
		return () => {
		};
	}, [count]);

	useEffect(() => {
		console.log("发送网络请求,只执行一次,传入第二个参数[]")
		return () => {
		};
	}, []);

	useEffect(() => {
		console.log("redux中数据变化")
		return () => {
		};
	},[]);


	return (
		<div>
			<h2>当前count:{count}</h2>
			<button onClick={() => setCount(count + 1)}>+1</button>
		</div>
	)
});

export default App;
