import {memo} from "react";
import {useLocalStorage} from "./hooks";

const App = memo((props) => {
	const [token, setToken] = useLocalStorage("toke")
	return (
		<div>
			<h2>App Root Component</h2>
			<h2>token: {token}</h2>
			<button onClick={() => setToken("coder-l")}>设置token</button>
		</div>
	)
});

export default App;
