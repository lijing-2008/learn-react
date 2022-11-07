import {memo, useEffect, useState} from "react";

function useLogLife(cName) {
	useEffect(() => {
		console.log(cName + "组件被创建")
		return () => {
			console.log(cName + "组件被销毁")
		};
	}, []);

}

const Home = memo(() => {
	useLogLife("home")
	return <h2>Home</h2>
})
const About = memo(() => {
	useLogLife("about")
	return <h2>About</h2>
})

const App = memo((props) => {
	useLogLife("app")
	const [isShow, setIsShow] = useState(true);
	return (
		<div>
			<h2>App Root Component</h2>
			<button onClick={(  ) => setIsShow(!isShow)}>change</button>
			{isShow && <Home/>}
			{isShow && <About/>}
		</div>
	)
});

export default App;
