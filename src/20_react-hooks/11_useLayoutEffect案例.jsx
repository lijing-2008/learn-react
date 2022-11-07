import {memo, useEffect, useLayoutEffect, useState} from "react";

const App = memo((props) => {
	const [count, setCount] = useState(100);
	useLayoutEffect(() => {
		console.log("2.useLayoutEffect")
		if (count === 0){
			setCount(Math.random()+99)
		}
	})
	useEffect(() => {
		console.log("3.useEffect")
		// 会有闪烁现象
		// if (count === 0){
		// 	setCount(Math.random()+99)
		// }
		return () => {};
	});
	console.log("1.app run")
	return (
		<div>
			<h2>count:{count}</h2>
			<button onClick={() => setCount(0)}>设置为0</button>
		</div>
	)
});

export default App;
