import classNames from "classnames";
import {TestWrapper} from "./style";

function App() {
	const isA = true;
	const isb = true;
	return (
		<TestWrapper>
			<h2 className={classNames({title: isA, title1: isb})}>hello world</h2>
			<h2 className={classNames(["title1"])}>world</h2>
		</TestWrapper>
	)
}

export default App
