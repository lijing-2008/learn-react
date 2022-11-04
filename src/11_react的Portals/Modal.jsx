import {createPortal} from "react-dom";

function Modal() {
    return createPortal(<h2>I am Modal</h2>, document.querySelector("#modal"))
}

export default Modal
