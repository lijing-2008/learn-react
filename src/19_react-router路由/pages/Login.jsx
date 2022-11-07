import {useState} from "react";
import {Navigate} from "react-router-dom"

function Login() {
	const [isLogin,setIsLogin]= useState(false)
	return (
		<div>
			<h2>Login Page</h2>
			{!isLogin ? <button onClick={(  ) => setIsLogin(!isLogin)}>登录</button>: <Navigate to="/home"/>}
		</div>
	)
}

export default Login
