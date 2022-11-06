import Home from "./pages/Home";
import Profile from "./pages/Profile";
import {useState} from "react";
import store from "./store";
import About from "./pages/About";
import Category from "./pages/Category";

function App() {
	const [num, setNum] = useState(store.getState().counter.num)
	store.subscribe(() => {
		setNum(store.getState().counter.num)
	})
	return (
		<div>
			<h2>App计数:{num}</h2>
			<Home/>
			<br/>
			<Profile/>
			<br/>
			<About/>
			<Category/>
		</div>
	)
}

export default App
