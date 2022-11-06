import {useState} from "react";
import store from "../store";
import {changeNumAction} from "../store/counter";

function Home() {
	const [num, setNum] = useState(store.getState().counter.num)
	store.subscribe(() => {
		setNum(store.getState().counter.num)
	})
	const add = (num) => {
		store.dispatch(changeNumAction(num))
	}
	return (
		<div>
			<h2>Home</h2>
			<div>
				<span>当前计数：{num}</span>
				<br/>
				<button onClick={event => add(1)}>+1</button>
				<button onClick={event => add(5)}>+5</button>
			</div>
		</div>
	)
}

export default Home
