import {useState} from "react";
import {useNavigate} from "react-router-dom";

function HomeRanking() {
	const [rankMenus] = useState([
		{id: "111", name: "华语"},
		{id: "112", name: "粤语"},
		{id: "113", name: "英语"}
	]);
	const navigate = useNavigate()
	return (
		<div>
			<h2>Home Ranking</h2>
			<h2>榜单数据</h2>
			<ul>
				{
					rankMenus.map((item) => {
						return (
							<li key={item.id}
									onClick={event => navigate(`/detail/${item.name}/${item.id}`)}>{item.id}-{item.name}</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default HomeRanking
