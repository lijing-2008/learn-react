import {memo, useEffect, useState} from "react";
import {useUserToken} from "./hooks";

const Home = memo(() => {
	const [user, token]=useUserToken()
	return <h2>Home-{user.name}-{user.level}-{token}</h2>
})
const About = memo(() => {
	const [user, token]=useUserToken()
	return <h2>About-{token}</h2>
})

const App = memo((props) => {
	return (
		<div>
			<h2>App Root Component</h2>
			<Home/>
			<About/>
		</div>
	)
});

export default App;
