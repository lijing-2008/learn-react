import {memo, useDeferredValue, useState} from "react";
import {faker} from "@faker-js/faker";

const nameArrays = []
for (let i = 0; i < 100; i++) {
	nameArrays.push(faker.name.fullName())
}

const App = memo((props) => {
	const [usernames, setUsernames] = useState(nameArrays);
	const deferredNames=useDeferredValue(usernames)
	const inputChange = (event) => {
		const filterNames = nameArrays.filter((item) => item.includes(event.target.value))
		setUsernames(filterNames)
	}
	return (
		<div>
			<input type="text" onInput={inputChange}/>
			<h2>用户列表</h2>
			<ul>
				{
					deferredNames.map((item) => {
						return (
							<li key={item}>{item}</li>
						)
					})
				}
			</ul>
		</div>
	)
});

export default App;
