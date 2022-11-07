import {memo, useCallback, useRef, useState} from "react";


const App = memo((props) => {
	const [count, setCount] = useState(0);
	// 1.useRef绑定dom
	const titleRef = useRef()
	const showTitleRef = () => {
		console.log(titleRef.current)
	}

	// 2.不管渲染多少次得到的都是同一个对象,解决闭包陷阱
	const countRef = useRef()
	countRef.current = count
	const increment = useCallback(() => {
		setCount(countRef.current + 1)
	}, [])

	return (
		<div>
			<h2 ref={titleRef}>Hello world</h2>
			<button onClick={showTitleRef}>查看title的dom</button>
			<hr/>
			<h2>count: {count}</h2>
			<button onClick={() => setCount(count + 1)}>+1</button>


		</div>
	)
});

export default App;
