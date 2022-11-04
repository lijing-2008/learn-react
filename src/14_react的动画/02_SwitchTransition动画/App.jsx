import {useState} from "react";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import "./style.css"

function App() {
    const [isLogin, setIsLogin] = useState(false)
    return (
        <div>
            <SwitchTransition mode="out-in">
                <CSSTransition
                    key={isLogin ? "exit" : "login"}
                    classNames="login"
                    timeout={1000}
                >
                    <button onClick={e => setIsLogin(!isLogin)}>{isLogin ? "退出" : "登录"}</button>
                </CSSTransition>
            </SwitchTransition>
        </div>
    )
}

export default App
