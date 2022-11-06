import * as actionTypes from "./constant";
import axios from "axios";

function changeNumAction(num) {
	return {
		type: actionTypes.CHANGE_NUM,
		num
	}
}

function changeBannerAction(banners) {
	return {
		type: actionTypes.CHANGE_BANNERS,
		banners
	}
}
const fetchBannersAction = () => {
	// 这里本来是不可以直接返回一个函数的，使用了中间件react-thunk进行了增强，
	// 可以返回函数，dispatch(fn)时fn会立即执行
	return  (dispatch, getState) => {
		//异步请求：网络请求
		console.log("foo function execution.")
		axios.get("http://39.105.24.108:3000/banner").then((res) => {
			// console.log(res.data.banners)
			dispatch(changeBannerAction(res.data.banners))
		})
	}
}



export {
	changeNumAction,
	changeBannerAction,
	fetchBannersAction
}
