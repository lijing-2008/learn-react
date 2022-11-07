import {NavLink} from "react-router-dom";
import {Outlet} from "react-router-dom"
function Home() {
	return (
		<div>
			<h2>Home</h2>
			<div className="home-nav">
				<NavLink to="/home/recommend">推荐</NavLink>
				<NavLink to="/home/ranking">排行榜</NavLink>
			</div>
			<Outlet/>
		</div>
	)
}

export default Home
