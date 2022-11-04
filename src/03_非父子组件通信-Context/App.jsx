import React from "react";
import ThemeContext from "./context/themeContext";
import Home from "./Home";
function App() {
    return (
        <div>

            <ThemeContext.Provider value={{name:"coder", age:18}}>
                <Home/>
            </ThemeContext.Provider>
            App
        </div>
    )
}

export default App
