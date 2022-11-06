import {useSelector} from "react-redux";

function Profile(props) {
	const counter = useSelector(state => state.counter.counter)
	const banners = useSelector(state => state.home.banners)
	return (
		<div>
			<h2>profile page,counter:{counter}</h2>
			<div className="banner">
				<h2>banners数据</h2>
				<ul>
					{
						banners.map((item, index) =>
							<li key={index}>
								<span>{item.typeTitle}</span>
								<img src={item.imageUrl} style={{width:"50px"}}/>
							</li>)
					}
				</ul>
			</div>
		</div>
	)
}

// const mapStateToProps = ( state ) => ({
// 	counter: state.counter.counter
// })
export default Profile
