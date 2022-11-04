import {StrictMode} from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
    return (
        <div>
            App
            <h2>StrictMode仅在开发模式下生效，他们不会影响生产构建</h2>

            <StrictMode>
                <Home/>
            </StrictMode>
            <Profile/>

        </div>
    )
}

export default App
