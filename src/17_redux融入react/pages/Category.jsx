import {connect} from "react-redux";
import {fetchBannersAction} from "../store/banners";
import {useEffect} from "react";

function Category(props) {
	const {getBanners} = props
	useEffect(() => {
		getBanners()
	}, [])
	return (
		<div>
			<h2>Category Page</h2>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		banners: state.banner.banners
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		getBanners() {
			dispatch(fetchBannersAction())
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Category)
