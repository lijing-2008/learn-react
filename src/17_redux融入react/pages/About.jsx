import {connect} from "react-redux";
import {changeNumAction} from "../store/counter";

function About(props) {
	const {banners, recommends} = props
	const calcNum = (num) => {
		// store.dispatch(changeNumAction(num))
		props.changeNum(num)
	}
	return (
		<div>
			<h2>About Page num:{props.counter}</h2>
			<div>
				<button onClick={event => calcNum(4)}>+4</button>
				<button onClick={event => calcNum(-9)}>-9</button>
			</div>

			<div className="banner">
				<h2>轮播图数据</h2>
				<ul>
					{
						banners.map((item, index) => {
							return <li key={item.encodeId}>
								<span>{item.typeTitle}</span>
								<img src={item.imageUrl} alt="alt" style={{width:"100px"}}/>
							</li>
						})
					}
				</ul>
			</div>
			<div className="recommend">
				<h2>推荐数据</h2>
				<ul>
					{
						recommends.map((item, index) => {
							return <li key={index}>{item.title}</li>
						})
					}
				</ul>
			</div>
		</div>
	);
}

// function mapStateToProps(state) {
// 	return {
// 		counter: state.num
// 	}
// }

const mapStateToProps = (state) => ({
	counter: state.counter.num,
	banners: state.banner.banners,
	recommends: state.banner.recommends
})
const mapDispatchToProps = (dispatch) => {
	return {
		changeNum(num) {
			dispatch(changeNumAction(num))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
