import {memo} from "react";
import {useScrollPosition} from "./hooks";


const Home = memo(() => {
	useScrollPosition()
	return <h2>Home</h2>
})
const About = memo(() => {
	return <h2>About</h2>
})

const App = memo((props) => {
	return (
		<div style={{height: "2000px"}}>
			<h2>App Root Component</h2>
			<Home/>
			<About/>
		</div>
	)
});

export default App;
