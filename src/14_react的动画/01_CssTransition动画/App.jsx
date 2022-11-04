import React from "react";
import {useState} from "react";
import {CSSTransition} from "react-transition-group";
import "./style.css"

function App() {
    //用于解决react-transition-group使用了过期的findDOMNode方法
    const cssTransitionRef = React.createRef()
    const [isShow, setIsShow] = useState(true);
    return (
        <div>
            <h2>react-transition-group</h2>
            <button onClick={(event) => setIsShow(!isShow)}>switch</button>
            {/*{isShow && <h2>hello world</h2>}*/}

            <CSSTransition
                nodeRef={cssTransitionRef}
                in={isShow}
                classNames="coder"
                timeout={2000}
                unmountOnExit={true}
                appear
                onEnter={(  ) => console.log("before enter")}
                onEntering={(  ) => console.log("entering")}
                onEntered={(  ) => console.log("after enter")}
                onExit={(  ) => console.log("before exit")}
                onExiting={(  ) => console.log("exiting")}
                onExited={(  ) => console.log("after exit")}
            >
                <h2 ref={cssTransitionRef}>hello react.</h2>
            </CSSTransition>
        </div>
    )
}

export default App
