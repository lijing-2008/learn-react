import {memo, useState, useTransition} from "react";
import {faker} from "@faker-js/faker";

const nameArrays = []
for (let i = 0; i < 100; i++) {
	nameArrays.push(faker.name.fullName())
}

const App = memo((props) => {
	const [usernames, setUsernames] = useState(nameArrays);
	const [pending, startTransition] = useTransition()
	// 返回一个状态值表示过度任务的等待状态，以及一个启动该过渡任务的函数
	// 它其实在告诉react对于某部分任务的更新优先级较低，可以推后执行
	const inputChange = (event) => {
		startTransition((  ) => {
			const filterNames = nameArrays.filter((item) => item.includes(event.target.value))
			setUsernames(filterNames)
		})
	}
	return (
		<div>
			<input type="text" onInput={inputChange}/>
			<h2>用户列表</h2>
			{pending && <span>loading...</span>}
			<ul>
				{
					usernames.map((item) => {
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
