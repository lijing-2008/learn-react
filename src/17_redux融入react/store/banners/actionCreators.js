import * as actionTypes from "./constant";
import axios from "axios";

function changeBannerAction(banners) {
	return {
		type: actionTypes.CHANGE_BANNERS,
		banners
	}
}

const fetchBannersAction = () => (dispatch, getState) => {
	// console.log("立即执行")
	axios.get("http://39.105.24.108:3000/banner").then((res) => {
		dispatch(changeBannerAction(res.data.banners))
	})
}

export {
	fetchBannersAction
}
