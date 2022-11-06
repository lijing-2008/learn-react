import ReactDOM from "react-dom/client"
import {ThemeProvider} from "styled-components";
import {Provider} from "react-redux";
// import App from "./01_组件通信案例练习/App";
// import App from "./02_组件的插槽实现/App"
// import App from "./03_非父子组件通信-Context/App"
// import App from "./04_非父子组件通信-event-bus/App"
// import App from "./05_setState详细使用/App"
// import App from "./07_数据不可变的力量/App"
// import App from "./08_ref获取DOM操作/App";
// import App from "./09_受控和非受控组件/App";
// import App from "./10_React高阶组件/04_高阶组件应用-生命周期拦截";
// import App from "./11_react的Portals/App";
// import App from "./12_react的fragment/App";
// import App from "./13_react的严格模式StrictMode/App";
// import App from "./14_react的动画/01_CssTransition动画/App";
// import App from "./14_react的动画/02_SwitchTransition动画/App";
// import App from "./14_react的动画/03_TransitionGroup/App";
// import App from "./15_react的css方案/01_内联样式css/App";
// import App from "./15_react的css方案/03_css-modules/App";
// import App from "./15_react的css方案/04_css-in-js-(styled-components)/App";
// import App from "./15_react的css方案/06_classnames库/App";
// import App from "./17_redux融入react/App";
// import store from "./17_redux融入react/store";
import App from "./18_redux-toolkit/App";
import store from "./18_redux-toolkit/store";

// 编写react代码
const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(
	// <StrictMode>
	<ThemeProvider theme={{color: "#ff8189", fontSize: "30px"}}>
		<Provider store={store}>
			<App/>
		</Provider>
	</ThemeProvider>
	// </StrictMode>
)
