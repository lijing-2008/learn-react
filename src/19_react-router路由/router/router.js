import React from "react";
import {Navigate} from "react-router-dom";
import Home from "../pages/Home";
import HomeRecommend from "../pages/HomeRecommend";
import HomeRanking from "../pages/HomeRanking";
// import About from "../pages/About";
// import Login from "../pages/Login";
import Category from "../pages/Category";
import Order from "../pages/Order";
import Detail from "../pages/Detail";
import User from "../pages/User";
import NotFound from "../pages/NotFound";
const About = React.lazy((  ) => import("../pages/About"))
const Login = React.lazy((  ) => import("../pages/Login"))
const routes = [
	{
		path: "/",
		element: <Navigate to="/home"/>
	},
	{
		path: "/home",
		element: <Home/>,
		children:[
			{
				path: "/home",
				element: <Navigate to="/home/recommend"/>
			},
			{
				path: "/home/recommend",
				element: <HomeRecommend/>
			},
			{
				path: "/home/ranking",
				element: <HomeRanking/>
			},
		]
	},
	{
		path: "/about",
		element: <About/>
	},
	{
		path: "/login",
		element: <Login/>
	},
	{
		path: "/category",
		element: <Category/>
	},
	{
		path: "/order",
		element: <Order/>
	},
	{
		path: "/detail/:type/:id",
		element: <Detail/>
	},
	{
		path: "/user",
		element: <User/>
	},
	{
		path: "/*",
		element: <NotFound/>
	},
]

export default routes
