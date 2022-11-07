import React, {memo, useEffect, useState} from 'react';

const App = memo((props) => {
	const [count, setCount] = useState(200);
	useEffect(() => {
		// 负责告诉react，当组件渲染完成时的副作用代码
		console.log("redux中数据变化，监听eventbus中的事件")

		return () => {
		//	当组件重新渲染或者组件卸载移除时，可以在这里执行一些撤销操作
			console.log("dom重新渲染或者卸载时，取消redux中的数据变化，取消监听eventbus中的事件")
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
