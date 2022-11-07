import {forwardRef, memo, useImperativeHandle, useRef} from "react";

const HelloWorld = memo(forwardRef((props, ref) => {
	const inputRef = useRef()
	// 通过useImperativeHandle可以暴露固定的操作,可以用来做一些权限上的限制处理
	useImperativeHandle(ref, () => {
		return {
			focus() {
				console.log("focus")
				inputRef.current.focus()
			}
		}
	})
	return (
		<input type="text" ref={inputRef}/>
	)
}))


const App = memo((props) => {
	const inputRef = useRef()
	const handleInput = () => {
		inputRef.current.focus()
		// console.log(inputRef.current)
		//下面的代码不会执行，因为
		inputRef.current.value = "hello world"
	}
	return (
		<div>
			{/*<input type="text" ref={inputRef}/>*/}
			<button onClick={handleInput}>获取dom</button>
			<HelloWorld ref={inputRef}/>
		</div>
	)
});

export default App;
