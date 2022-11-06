import {useDispatch, useSelector} from "react-redux";
import {changeNumber} from "../store/features/counter";
import {fetchHomeBannersAction} from "../store/features/home";

function Home(props) {
	const counter = useSelector(state => state.counter.counter)
	const dispatch = useDispatch()
	dispatch(fetchHomeBannersAction())

	return (
		<div>
			<h2>Home page, counter:{counter}</h2>
			<button onClick={event => dispatch(changeNumber(5))}>+5</button>
			<button onClick={event => dispatch(changeNumber(-5))}>-5</button>
		</div>
	)
}

export default Home
