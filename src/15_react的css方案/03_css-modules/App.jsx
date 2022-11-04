import {useState} from "react";
import appStyle from "./App.module.css"

function App() {
    const [size, setSize] = useState(20)
    const addSize = () => {
        setSize(size + 2)
    }
    return (
        <div>
            <h2 className={appStyle.title}>hello world</h2>
            <p className={appStyle.content}>content</p>
        </div>
    )
}

export default App
