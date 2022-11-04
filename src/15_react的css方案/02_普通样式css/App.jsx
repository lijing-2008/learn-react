import {useState} from "react";
// 都是全局样式
import "./style.css"

function App() {
    const [size, setSize] = useState(20)
    const addSize = () => {
        setSize(size + 2)
    }
    return (
        <div>
            <h2 className="title">hello world</h2>
            <button onClick={() => addSize()}>add size</button>
            <p>content...</p>
            App
        </div>
    )
}

export default App
