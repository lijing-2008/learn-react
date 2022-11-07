import {useParams} from "react-router-dom";

function Detail() {
	const param = useParams()
	console.log(param)
	return (
		<div>
      <h2>Detail Page</h2>
			<h2>id:{param.id}-type:{param.type}</h2>
		</div>
	)
}

export default Detail
