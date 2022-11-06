import {connect} from "react-redux";
import axios from "axios";
import {changeBannerAction} from "../store/actionCreators";
import {useEffect} from "react";

function Category(props) {
	const {banners, changeBanners} = props
	useEffect(() => {
		axios.get("http://39.105.24.108:3000/banner").then((res) => {
			console.log(res.data.banners)
			changeBanners(res.data.banners)
		})
	}, [])
	return (
		<div>
			<h2>Category Page</h2>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		banners: state.banners
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		changeBanners(banners) {
			dispatch(changeBannerAction(banners))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Category)
