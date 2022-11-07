import {Navigate, NavLink, Route, Routes, useNavigate, useRoutes} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import HomeRecommend from "./pages/HomeRecommend";
import HomeRanking from "./pages/HomeRanking";
import Category from "./pages/Category";
import Order from "./pages/Order";
import Detail from "./pages/Detail";
import User from "./pages/User";
import routes from "./router/router";

function App() {
	const navigate = useNavigate()
	return (
		<div className="app">
			<div className="header">
				<span>header</span>
				<div className="nav">
					<NavLink to="/home">首页</NavLink>
					<NavLink to="/about">关于</NavLink>
					<NavLink to="/login">登录</NavLink>
					<button onClick={() => navigate("/category")}>分类</button>
					<span onClick={() => navigate("/order")}>订单</span>
					<NavLink to="/user?name=lijing&age=18">用户</NavLink>
				</div>
			</div>
			<hr/>
			<div className="content">
				{/*<Routes>*/}
				{/*	<Route path="/" element={<Navigate to="/home"/>}/>*/}
				{/*	<Route path="/home" element={<Home/>}>*/}
				{/*		<Route path="/home" element={<Navigate to="/home/recommend"/>}/>*/}
				{/*		<Route path="/home/recommend" element={<HomeRecommend/>}/>*/}
				{/*		<Route path="/home/ranking" element={<HomeRanking/>}/>*/}
				{/*	</Route>*/}
				{/*	<Route path="/about" element={<About/>}/>*/}
				{/*	<Route path="/login" element={<Login/>}/>*/}
				{/*	<Route path="/category" element={<Category/>}/>*/}
				{/*	<Route path="/order" element={<Order/>}/>*/}
				{/*	<Route path="/detail/:type/:id" element={<Detail/>}/>*/}
				{/*	<Route path="/user" element={<User/>}/>*/}
				{/*	<Route path="/*" element={<NotFound/>}/>*/}
				{/*</Routes>*/}
				{useRoutes(routes)}
			</div>
			<hr/>
			<div className="footer">footer</div>
		</div>
	)
}

export default App
