import store from "../store";
import {useState} from "react";
import {changeNumAction} from "../store/counter";

function Profile() {
	const [num, setNum] = useState(store.getState().counter.num);
	store.subscribe(() => {
		setNum(store.getState().counter.num)
	})
	const sub = (num) => {
		store.dispatch(changeNumAction(num))
	}
	return (
		<div>
			<h2>Profile</h2>
			<div>
				<span>当前计数：{num}</span>
				<br/>
				<button onClick={event => sub(-1)}>-1</button>
				<button onClick={event => sub(-5)}>-5</button>
			</div>

		</div>
	)
}

export default Profile
