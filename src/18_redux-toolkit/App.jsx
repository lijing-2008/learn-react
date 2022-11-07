import Home from "./pages/Home";
import Profile from "./pages/Profile";
import "./style.css"
import {shallowEqual, useSelector} from "react-redux";

function App() {
	const counter = useSelector(state => state.counter.counter, shallowEqual)
	return (
		<div>
			<h2>App counter:{counter}</h2>
			<div className="pages">
				<Home/>
				<Profile/>
			</div>
		</div>
	)
}

// const mapStateToProps = ( state ) => ({
// 	counter: state.counter.counter
// })

export default App
