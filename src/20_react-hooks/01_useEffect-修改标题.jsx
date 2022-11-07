import React, {memo, useEffect, useState} from 'react';

const App = memo((props) => {
	const [count, setCount] = useState(200);
	// 负责告诉react，当组件渲染完成时的副作用代码
	useEffect(() => {
		document.title = count
		return () => {
		};
	} );

	return (
		<div>
			<h2>当前count:{count}</h2>
			<button onClick={(  ) => setCount(count+1)}>+1</button>
		</div>
	)
});

export default App;
