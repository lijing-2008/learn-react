import {useState} from "react";

function App() {
    const [size, setSize] = useState(20)
    const addSize = () => {
        setSize(size + 2)
    }
    return (
        <div>
            <h2 style={{color: "red", fontSize: `${size}px`}}>hello world</h2>
            <button onClick={() => addSize()}>add size</button>
            <p>content...</p>
            App
        </div>
    )
}

export default App
