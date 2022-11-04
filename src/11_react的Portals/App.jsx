import {createPortal} from "react-dom";
import Modal from "./Modal";

function App() {
    return (
        <div>
            App
            <h2>App h1</h2>
            {
                createPortal(<h2>App H2</h2>, document.querySelector("#coder"))
            }
            <Modal/>
        </div>
    )
}

export default App
