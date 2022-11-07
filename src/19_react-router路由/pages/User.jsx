import {useSearchParams} from "react-router-dom";

function User() {
	const [searchPrams, setUserParam]=useSearchParams()
	const query = Object.fromEntries(searchPrams)
	console.log(query)
	// console.log(searchPrams.get("name"))
	// console.log(searchPrams.get("age"))
	return (
		<div>
			<h2>User Page</h2>
			<div>{query.name}-{query.age}</div>
		</div>
	)
}

export default User
