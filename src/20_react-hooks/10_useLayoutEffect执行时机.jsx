import {memo, useEffect, useLayoutEffect, useState} from "react";

const App = memo((props) => {
	const [count, setCount] = useState(0);
	useLayoutEffect(() => {
		console.log("2.useLayoutEffect")
	})
	useEffect(() => {
		console.log("3.useEffect")
		return () => {};
	});
	console.log("1.app run")
	return (
		<div>
			<h2>count:{count}</h2>
			<button onClick={() => setCount(count + 1)}>+1</button>
		</div>
	)
});

export default App;
